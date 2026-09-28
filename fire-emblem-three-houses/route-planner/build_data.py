"""Build data.js for the route planner.

Run from the repository root:

    python3 fire-emblem-three-houses/route-planner/build_data.py LESSON_RAW SKILL_LEVELS_HTML

LESSON_RAW is https://fireemblemwiki.org/wiki/Lesson?action=raw saved to a file.
SKILL_LEVELS_HTML is https://serenesforest.net/three-houses/characters/skill-levels/
saved to a file. Fetch both through Bright Data. Everything else is read from
beginner-guide.md, so re-run this after any change to the guide's tables.
"""
import re, json, html, sys
G='fire-emblem-three-houses/beginner-guide.md'
LESSON, SKL = sys.argv[1], sys.argv[2]
g=open(G).read()
SK=['Sword','Lance','Axe','Bow','Brawling','Reason','Faith','Authority','Heavy Armour','Riding','Flying']
def norm(s):
    s=s.strip()
    return {'Armour':'Heavy Armour','Armor':'Heavy Armour','Heavy Armor':'Heavy Armour','Fighting':'Brawling'}.get(s,s)
def rows_under(header, stop='\n### |\n## '):
    i=g.index(header); seg=g[i:]; m=re.search(stop,seg[len(header):]); seg=seg[:len(header)+(m.start() if m else len(seg))]
    out=[]
    for line in seg.split('\n'):
        if line.startswith('|') and not re.match(r'\|\s*-',line):
            out.append([c.strip() for c in line.strip('|').split('|')])
    return out[1:]
def lst(s): return [] if s in ('—','-','') else [norm(x) for x in s.split(',')]
# characters
chars={}
for hdr,house in [('### Black Eagles\n','BE'),('### Blue Lions\n','BL'),('### Golden Deer\n','GD'),('### Church and faculty\n','Church'),('### Expansion Pass characters\n','DLC')]:
    for r in rows_under(hdr):
        name=r[0]
        chars[name]=dict(name=name,house=house,strong=lst(r[1]),weak=lst(r[2]),budding=None if r[3] in('—','') else norm(r[3]),suggestText=r[4],role=r[5].replace('*',''),roleDerived=r[5].startswith('*'))
for w in ['Yuri','Balthus','Constance','Hapi']: chars[w]['house']='Wolves'
# lesson goals
t=open(LESSON).read().split('\n')[241:755]
txt='\n'.join(t); cur=None; goals={}
for r in txt.split('\n|-\n'):
    cells=[c.lstrip('| ').strip() for c in r.split('\n') if c.startswith('|') and not c.startswith('|}') and not c.startswith('{|')]
    if not cells: continue
    m=re.search(r'\]\]&lt;br&gt;\[\[([^\]|]+)',cells[0])
    if m: cur=m.group(1).replace(' (Three Houses)',''); cells=cells[1:]
    if len(cells)<3: continue
    skills=[norm({'Armor':'Heavy Armour'}.get(s,s)) for s in re.findall(r'\{\{(\w+?)16\}\}',cells[0])]
    cls=re.sub(r'\[\[(?:[^|\]]*\|)?([^\]]+)\]\]',r'\1',cells[-1]); cls=re.sub(r'.*\|\s*','',cls).strip()
    goals.setdefault(cur,[]).append(dict(skills=skills,cls=cls))
for n,c in chars.items():
    gl=goals.get(n,[])
    c['defaultGoal']=gl[0]['skills'] if gl else []
    c['goalRequests']=[x for x in gl[1:]]
# initial ranks
s=open(SKL).read(); i=s.find('<h4>Initial Values</h4>'); seg=s[i:i+60000]
for tb in re.findall(r'<table.*?</table>',seg,re.S):
    for r in re.findall(r'<tr.*?</tr>',tb,re.S)[1:]:
        cells=[html.unescape(re.sub(r'<[^>]+>','',c)).strip() for c in re.findall(r'<t[hd].*?</t[hd]>',r,re.S)]
        n=cells[0].replace('Protagonist','Byleth')
        if n in chars: chars[n]['initial']={SK[k]:v for k,v in enumerate(cells[1:12]) if v}
# classes
classes={}
for hdr,tier in [('### Beginner classes\n','Beginner'),('### Intermediate classes\n','Intermediate'),('### Advanced classes\n','Advanced'),('### Master classes\n','Master'),('### Special classes\n','Special')]:
    for r in rows_under(hdr):
        name,sug,prof,mast,role=r[:5]
        names=[name]
        if ' / ' in name: names=[x.strip() for x in name.split(' / ')]
        for nm in names:
            gender=None
            mm=re.search(r'\((male|female|house leaders)\)',nm)
            if mm: gender={'male':'M','female':'F'}.get(mm.group(1)); nm=nm[:mm.start()].strip()
            prereq=None; sg=sug
            pm=re.search(r',?\s*plus (.+?) certification',sg)
            if pm: prereq=pm.group(1); sg=sg[:pm.start()]
            req=[]
            if ' or ' not in sug:
              for part in [p.strip() for p in sg.split(',') if p.strip()]:
                m=re.match(r'(.+?) ([EDCBAS]\+?)$',part)
                req.append((m.group(1),m.group(2)))
            # alternatives "Axe, Bow or Brawling D" / "Reason or Faith D"
            if ' or ' in sug:
                rank=sug.split()[-1]; alts=re.split(r',\s*| or ',sug.rsplit(' ',1)[0])
                reqs=[{'any':[norm(a) for a in alts],'rank':rank}]
            else:
                reqs=[{'skill':norm(a),'rank':b} for a,b in req]
            classes[nm]=dict(name=nm,tier=tier,req=reqs,prof=lst(prof),mastery=mast,role=role,gender=gender,prereq=prereq,
                level={'Beginner':5,'Intermediate':10,'Advanced':20,'Special':20,'Master':30}[tier],
                seal={'Beginner':'Beginner Seal','Intermediate':'Intermediate Seal','Advanced':'Advanced Seal','Special':'Abyssian Exam Pass','Master':'Master Seal'}[tier])
classes['Dark Mage']['seal']='Dark Seal'; classes['Dark Bishop']['seal']='Dark Seal'
classes['Lord']['only']=['Edelgard','Dimitri','Claude']
# unique
uniq=[]
for r in rows_under('### Unique classes\n'):
    if r[0].startswith('Sources'): continue
    if r[0]=='Lord': continue
    uniq.append(dict(name=r[0],who=r[1],granted=r[2],prof=lst(r[3]),abilities=r[4],mastery=r[5],role=r[6]))
# recruitment
rec={}
for r in rows_under('### Requirements table\n'):
    rec[r[0]]=dict(fromChapter=int(r[2]),needs=r[3])
for n,v in rec.items():
    m=re.match(r'(\d+) (\w+), ([EDCBAS]\+?) (.+?)(\.|$)',v['needs'])
    if m: v.update(stat=m.group(2),statVal=int(m.group(1)),rank=m.group(3),skill=norm(m.group(4)))
    m=re.match(r'Level (\d+)',v['needs'])
    if m: v['level']=int(m.group(1))
    if 'automatically' in v['needs'].lower(): v['auto']=True
    chars[n]['recruit']=v
faculty=[('Seteth','Sword, Lance, Axe, Authority, Flying','Unavailable in Chapter 6'),('Hanneman','Bow, Reason, Riding',''),('Manuela','Sword, Faith, Flying','Absent in Chapter 6'),('Gilbert','Lance, Axe, Heavy Armour, Riding','From Chapter 5. Absent in Chapter 10'),('Alois','Axe, Brawling, Heavy Armour','Absent in Chapters 5 and 10'),('Catherine','Sword, Brawling','Absent in Chapter 10'),('Shamir','Lance, Bow','Absent in Chapters 3, 5 and 10'),('Jeralt','Lance, Authority, Riding','Absent from Chapter 9'),('Rhea','Sword, Brawling, Reason, Faith',''),('Jeritza','Sword, Lance, Brawling, Riding','Expansion Pass'),('Anna','Sword, Axe, Bow, Faith','Expansion Pass')]
faculty=[dict(name=a,skills=lst(b),note=c) for a,b,c in faculty]
out=dict(skills=SK,characters=list(chars.values()),classes=list(classes.values()),unique=uniq,faculty=faculty)
open('fire-emblem-three-houses/route-planner/data.js','w').write('// Generated from ../beginner-guide.md and its sources. Do not edit by hand.\n// Regenerate with build_data.py.\nwindow.FE3H_DATA = '+json.dumps(out,indent=1)+';\n')
print(len(chars),len(classes),len(uniq))
for n in ['Byleth','Edelgard','Hapi','Gilbert','Jeritza']: print(n,chars[n].get('initial'),chars[n]['defaultGoal'],chars[n]['goalRequests'][:2])
print(classes['Fighter']['req'],classes['Trickster'],classes['War Cleric']['gender'])
missing=[n for n,c in chars.items() if 'initial' not in c]; print('no initial',missing)
