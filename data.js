export const VERSION='1.0.0';
export const CATALOG_DATE='23 September 2026';
const car=(id,name,cls,extra={})=>({id,name,cls,abs:cls==='LMGT3',ve:['LMGT3','Hypercar'].includes(cls),...extra});
export const CARS=[
 car('f296','Ferrari 296 LMGT3','LMGT3'),car('f296evo','Ferrari 296 LMGT3 Evo (2026)','LMGT3'),
 car('amg','Mercedes-AMG LMGT3','LMGT3'),car('amgt3','Aston Martin Vantage AMR LMGT3','LMGT3'),car('bmwgt3','BMW M4 LMGT3','LMGT3'),car('corvettegt3','Corvette Z06 LMGT3.R','LMGT3'),car('mustang','Ford Mustang LMGT3','LMGT3'),car('huracan','Lamborghini Huracán LMGT3 Evo2','LMGT3'),car('lexus','Lexus RC F LMGT3','LMGT3'),car('mclaren','McLaren 720S LMGT3 Evo','LMGT3'),car('porschegt3','Porsche 911 GT3 R','LMGT3',{rearEngine:true}),
 car('a424','Alpine A424','Hypercar',{hybrid:true}),car('valkyrie','Aston Martin Valkyrie AMR-LMH','Hypercar'),car('bmwhyper','BMW M Hybrid V8','Hypercar',{hybrid:true}),car('cadillac','Cadillac V-Series.R','Hypercar',{hybrid:true}),car('499p','Ferrari 499P','Hypercar',{hybrid:true}),car('genesis','Genesis GMR-001','Hypercar',{hybrid:true}),car('glickenhaus','Glickenhaus SCG 007','Hypercar'),car('isotta','Isotta Fraschini Tipo 6','Hypercar',{hybrid:true}),car('sc63','Lamborghini SC63','Hypercar',{hybrid:true}),car('9x8','Peugeot 9X8 (original)','Hypercar',{hybrid:true,wingless:true}),car('9x8_2024','Peugeot 9X8 (2024)','Hypercar',{hybrid:true}),car('963','Porsche 963','Hypercar',{hybrid:true}),car('gr010','Toyota GR010-Hybrid','Hypercar',{hybrid:true}),car('tr010','Toyota TR010-Hybrid','Hypercar',{hybrid:true}),car('vanwall','Vanwall Vandervell 680','Hypercar'),
 car('oreca23','ORECA 07 Gibson (2023 WEC)','LMP2'),car('oreca24','ORECA 07 Gibson (2024 Le Mans)','LMP2'),car('orecaelms','ORECA 07 Gibson (ELMS)','LMP2'),
 car('adess','ADESS-03 / AD25','LMP3'),car('duqueine','Duqueine D09','LMP3'),car('ginetta','Ginetta G61-LT-P325-Evo','LMP3'),car('ligier','Ligier JS P325','LMP3'),
 car('amgte','Aston Martin Vantage AMR GTE','GTE'),car('c8r','Chevrolet Corvette C8.R','GTE'),car('488','Ferrari 488 GTE Evo','GTE'),car('rsr','Porsche 911 RSR-19','GTE'),car('custom','Other / custom car','LMGT3')
];
const track=(id,circuit,layout,km,aero='medium',bumps=1,brakes=2,extra={})=>({id,circuit,layout,km,aero,bumps,brakes,...extra});
export const TRACKS=[
 track('lemans','Le Mans','WEC',13.626,'low',2,3),track('lemansm','Le Mans','Mulsanne',13.6,'low',2,3,{estimated:true}),
 track('bahrain','Bahrain','WEC / Grand Prix',5.412,'high',1,3),track('bahrainend','Bahrain','Endurance',6.299,'high',1,3),track('bahrainouter','Bahrain','Outer',3.543,'low'),track('bahrainpad','Bahrain','Paddock',3.823,'high',1,2,{estimated:true}),
 track('barcelona','Barcelona-Catalunya','ELMS',4.657,'high',2),track('cota','COTA','WEC',5.513,'high',2,3),track('cotan','COTA','National',3.792,'high',2),track('daytona','Daytona','Road course',5.73,'low',2,3),
 track('fuji','Fuji','WEC',4.563,'medium',1,3),track('fujic','Fuji','Classic',4.526,'medium',1,3),track('imola','Imola','WEC',4.909,'high',3),track('imolaelms','Imola','ELMS',4.909,'high',3),track('interlagos','Interlagos','WEC',4.309,'high',2),track('laguna','Laguna Seca','Full',3.602,'high',2),
 track('lusail','Lusail','WEC',5.419,'high'),track('lusails','Lusail','Short',3.1,'high',1,2,{estimated:true}),track('monza','Monza','WEC',5.793,'low',3,3),track('monzag','Monza','Curva Grande',5.7,'low',3,3,{estimated:true}),
 track('ricard','Paul Ricard','ELMS',5.771,'medium',2),track('ricard3a','Paul Ricard','3A',3.84,'medium',2,2,{estimated:true}),track('ricard1a','Paul Ricard','1A',5.79,'low',2),track('ricard1av2','Paul Ricard','1A V2',5.79,'medium',2),track('ricardshort','Paul Ricard','1A V2 Short',3.79,'medium',2,2,{estimated:true}),
 track('portimao','Portimão','WEC',4.653,'high',3),track('portimaoelms','Portimão','ELMS',4.653,'high',3),track('sebring','Sebring','WEC',6.019,'medium',3,3),track('sebrings','Sebring','School',3.62,'medium',3,2,{estimated:true}),
 track('silverstone','Silverstone','WEC',5.891,'high',2),track('silverelms','Silverstone','ELMS',5.891,'high',2),track('silverint','Silverstone','International',2.979,'high',2),track('silvern','Silverstone','National',2.639,'medium',2),track('spa','Spa-Francorchamps','WEC',7.004,'medium',2,3),track('spaelms','Spa-Francorchamps','ELMS',7.004,'medium',2,3),
 track('roadatlanta','Road Atlanta','Full',4.088,'medium',3,3,{recent:true}),track('longbeach','Long Beach','Street circuit',3.167,'high',3,3,{recent:true}),track('custom','Other / custom circuit','Custom layout',5,'medium',1)
];
export const WEATHER=[['dry','Dry'],['damp','Damp / light rain'],['wet','Wet'],['heavy','Heavy rain'],['drying','Drying track'],['worsening','Getting wetter']];
export const SOURCES=[
 ['LMU car catalogue','https://lemansultimate.com/cars/'],['LMU circuit catalogue','https://lemansultimate.com/circuits/'],
 ['LMU v1.4.2 update','https://guide.lemansultimate.com/hc/en-gb/articles/17713037697807-V1-4-2-Update-1-4-Patch-2'],
 ['Circuit layout groups (June 2026 BOP)','https://lemansultimate.com/wp-content/uploads/2026/06/LMU_BOP_1.3.3.2_Marked-up-1.pdf'],
 ['US Track Pack 2 announcement','https://lemansultimate.com/le-mans-ultimate-adds-second-us-track-pack-dlc-alongside-elms-2026-season-liveries/'],
 ['Official LMU guides','https://guide.lemansultimate.com/']
];
