/**
 * Second-pass German → Modern Standard Arabic expansion.
 * Contains rare curriculum vocabulary, formal/IHK language and natural phrases.
 * Parsed once at module initialization; hover-time lookup remains O(1).
 */
const rows = `
durchführbarkeit|قابلية التنفيذ
wiederanlauf|إعادة التشغيل بعد العطل
wiederherstellbarkeit|قابلية الاستعادة
zugriffssteuerung|إدارة التحكم في الوصول
berechtigungsstruktur|بنية الصلاحيات
zugriffsprotokollierung|تسجيل عمليات الوصول
datensicherungskonzept|مفهوم النسخ الاحتياطي للبيانات
wiederherstellungsstrategie|استراتيجية الاستعادة
fehlerursachenanalyse|تحليل أسباب الخطأ
systemverfügbarkeit|توافر النظام
datenaufbewahrung|الاحتفاظ بالبيانات
verantwortungsbereich|نطاق المسؤولية
zuständigkeitsbereich|نطاق الاختصاص
vertragsbestandteil|جزء من العقد
haftungsbeschränkung|تحديد المسؤولية القانونية
leistungserbringung|تقديم الخدمة
kostenträger|جهة تحمل التكلفة
kostenstelle|مركز التكلفة
wirtschaftlichkeitsberechnung|حساب الجدوى الاقتصادية
zugriffsverwaltung|إدارة الوصول
benutzerberechtigung|صلاحية المستخدم
datensicherungsstrategie|استراتيجية النسخ الاحتياطي للبيانات
fehlerprotokoll|سجل الأخطاء
systemausfall|تعطل النظام
durchführungsbestimmung|حكم تنفيذي
ausführungsbestimmung|لائحة تنفيذية
umsetzbarkeit|قابلية التطبيق
realisierbarkeit|قابلية الإنجاز
machbarkeit|إمكانية التنفيذ
machbarkeitsprüfung|دراسة قابلية التنفيذ
zweckerfüllung|تحقيق الغرض
zielerreichung|تحقيق الهدف
zielvorgabe|هدف محدد مسبقًا
zielvereinbarung|اتفاق على الأهداف
erfüllungsgrad|درجة الإنجاز
reifegrad|مستوى النضج
fertigstellungsgrad|درجة الاكتمال
handlungsfähigkeit|القدرة على التصرف
entscheidungsbefugnis|صلاحية اتخاذ القرار
zeichnungsbefugnis|صلاحية التوقيع
vertretungsberechtigung|صلاحية التمثيل
weisungsbefugnis|صلاحية إصدار التعليمات
verfügungsbefugnis|صلاحية التصرف
verantwortungszuweisung|إسناد المسؤولية
aufgabenverteilung|توزيع المهام
zuständigkeitsregelung|تنظيم الاختصاصات
kompetenzbereich|مجال الصلاحيات
entscheidungsspielraum|هامش اتخاذ القرار
ermessensspielraum|هامش التقدير
beurteilungsspielraum|هامش التقييم
gestaltungsfreiheit|حرية التصميم والتنظيم
handlungsanweisung|تعليمات إجرائية
verfahrensanweisung|تعليمات العملية
arbeitsanweisung|تعليمات العمل
durchführungsanweisung|تعليمات التنفيذ
vorgehensmodell|نموذج منهجية العمل
verfahrensablauf|سير الإجراء
prozessablauf|سير العملية
ablaufbeschreibung|وصف سير العمل
prozessbeschreibung|وصف العملية
prozessschritt|خطوة في العملية
bearbeitungsschritt|خطوة معالجة
prüfschritt|خطوة فحص
freigabeschritt|خطوة الموافقة
genehmigungsverfahren|إجراء الموافقة
antragsverfahren|إجراء تقديم الطلب
vergabeverfahren|إجراء الإسناد أو المناقصة
auswahlverfahren|إجراء الاختيار
nachweisverfahren|إجراء الإثبات
prüfverfahren|إجراء الفحص
kontrollverfahren|إجراء الرقابة
abstimmungsverfahren|إجراء التنسيق أو التصويت
änderungsverfahren|إجراء التغيير
eskalationsverfahren|إجراء التصعيد
meldeverfahren|إجراء الإبلاغ
feststellungsverfahren|إجراء التحقق الرسمي
bewilligungsverfahren|إجراء منح الموافقة
genehmigungspflicht|وجوب الحصول على موافقة
anzeigepflicht|واجب الإخطار
auskunftspflicht|واجب تقديم المعلومات
nachweispflicht|واجب الإثبات
dokumentationspflicht|واجب التوثيق
aufbewahrungspflicht|واجب الاحتفاظ
verschwiegenheitspflicht|واجب السرية
sorgfaltspflicht|واجب العناية
mitwirkungspflicht|واجب التعاون
mitteilungspflicht|واجب الإبلاغ
unterrichtungspflicht|واجب الإحاطة بالمعلومات
rechnungslegungspflicht|واجب إعداد الحسابات
prüfungspflicht|واجب الفحص
haftungsausschluss|استبعاد المسؤولية
haftungsumfang|نطاق المسؤولية
haftungsgrundlage|أساس المسؤولية
haftungsrisiko|مخاطر المسؤولية
ersatzpflicht|واجب التعويض
schadensersatzpflicht|واجب تعويض الضرر
leistungspflicht|واجب الأداء
gegenleistung|المقابل التعاقدي
leistungsaustausch|تبادل الأداء التعاقدي
leistungsempfänger|متلقي الخدمة
leistungserbringer|مقدم الخدمة
leistungsgegenstand|موضوع الخدمة
leistungsbeschreibung|وصف الخدمة
leistungsverzeichnis|قائمة الخدمات والكميات
leistungszeitraum|فترة تقديم الخدمة
leistungszeitpunkt|موعد تقديم الخدمة
leistungsort|مكان تقديم الخدمة
leistungsqualität|جودة الخدمة
leistungsminderung|انخفاض الأداء
leistungsausfall|انقطاع الخدمة
leistungsstörung|خلل في تنفيذ الالتزام
schlechterfüllung|تنفيذ معيب للالتزام
nichterfüllung|عدم تنفيذ الالتزام
teilleistung|تنفيذ جزئي
ersatzleistung|أداء بديل
nachleistung|تنفيذ لاحق
vertragserfüllung|تنفيذ العقد
vertragspflicht|التزام تعاقدي
vertragsbedingung|شرط تعاقدي
vertragsklausel|بند تعاقدي
vertragsgegenstand|موضوع العقد
vertragsdauer|مدة العقد
vertragslaufzeit|فترة سريان العقد
vertragsbeginn|بدء العقد
vertragsende|نهاية العقد
vertragsverlängerung|تمديد العقد
vertragsanpassung|تعديل العقد
vertragsänderung|تغيير العقد
vertragsauflösung|حل العقد
vertragsbeendigung|إنهاء العقد
vertragsrücktritt|الرجوع عن العقد
vertragswidrig|مخالف للعقد
vertragsgemäß|مطابق للعقد
rechtsverbindlich|ملزم قانونيًا
rechtswirksam|نافذ قانونيًا
rechtswirksamkeit|النفاذ القانوني
rechtsfähigkeit|الأهلية لاكتساب الحقوق
rechtsfähig|ذو أهلية قانونية
handlungsbevollmächtigter|مفوّض تجاري
vertretungsmacht|سلطة التمثيل
vollmachtgeber|مانح التفويض
vollmachtnehmer|المفوّض إليه
vollmachtsumfang|نطاق التفويض
vollmachtserteilung|منح التفويض
vollmachtswiderruf|سحب التفويض
formvorschrift|متطلب شكلي قانوني
schriftformerfordernis|اشتراط الشكل الكتابي
textform|صيغة نصية
schriftform|صيغة كتابية موقعة
formfreiheit|حرية الشكل
formmangel|عيب شكلي
beurkundung|توثيق رسمي لدى جهة مختصة
beglaubigung|تصديق رسمي
zustellung|تبليغ رسمي
fristbeginn|بداية المهلة
fristende|نهاية المهلة
fristablauf|انقضاء المهلة
fristverlängerung|تمديد المهلة
fristversäumnis|فوات المهلة
ausschlussfrist|مهلة مسقطة للحق
gesetzliche frist|مهلة قانونية
vertragliche frist|مهلة تعاقدية
kalendertag|يوم تقويمي
werktag|يوم عمل
fälligkeit|موعد الاستحقاق
zahlungsfrist|مهلة الدفع
lieferfrist|مهلة التسليم
leistungsfrist|مهلة الأداء
verzugsschaden|ضرر ناتج عن التأخير
verzugszins|فائدة التأخير
verzugsvoraussetzung|شرط تحقق التأخير
schuldner|مدين
gläubiger|دائن
forderung|مطالبة مالية
gegenforderung|مطالبة مقابلة
hauptforderung|المطالبة الأصلية
nebenforderung|مطالبة تابعة
forderungsausfall|تعثر تحصيل المطالبة
forderungsmanagement|إدارة المستحقات
zahlungseingang|ورود الدفعة
zahlungsausgang|صرف الدفعة
zahlungsverkehr|حركة المدفوعات
zahlungsbedingung|شرط الدفع
zahlungsart|طريقة الدفع
zahlungsziel|أجل الدفع
zahlungsfähigkeit|القدرة على الدفع
zahlungsunfähigkeit|العجز عن الدفع
insolvenz|إعسار
insolvenzverfahren|إجراءات الإعسار
insolvenzgrund|سبب الإعسار
überschuldung|زيادة الديون عن الأصول
drohende zahlungsunfähigkeit|عجز وشيك عن الدفع
eigenkapital|رأس المال الذاتي
fremdkapital|رأس المال المقترض
gesamtkapital|إجمالي رأس المال
kapitalbedarf|الحاجة إلى رأس المال
kapitalbeschaffung|توفير رأس المال
kapitalbindung|ارتباط رأس المال
kapitalrückfluss|تدفق رأس المال العائد
eigenfinanzierung|تمويل ذاتي
fremdfinanzierung|تمويل خارجي بالدين
innenfinanzierung|تمويل داخلي
außenfinanzierung|تمويل خارجي
beteiligungsfinanzierung|تمويل بالمساهمة
kreditfinanzierung|تمويل ائتماني
selbstfinanzierung|تمويل ذاتي من الأرباح
rückstellungsfinanzierung|تمويل عن طريق المخصصات
abschreibungsfinanzierung|تمويل من أثر الإهلاك
finanzierungsbedarf|الحاجة التمويلية
finanzierungsplan|خطة التمويل
finanzierungskosten|تكاليف التمويل
kreditwürdigkeit|الجدارة الائتمانية
bonitätsprüfung|فحص الجدارة الائتمانية
kreditrahmen|حد ائتماني
kreditlaufzeit|مدة القرض
kreditsicherheit|ضمان القرض
tilgungsrate|قسط السداد
zinsbelastung|عبء الفائدة
zinssatz|سعر الفائدة
effektivzins|معدل الفائدة الفعلي
nominalzins|معدل الفائدة الاسمي
restschuld|الدين المتبقي
annuität|قسط سنوي ثابت
tilgungsplan|خطة السداد
darlehen|قرض
darlehensvertrag|عقد قرض
kontokorrentkredit|ائتمان الحساب الجاري
lieferantenkredit|ائتمان المورد
kundenanzahlung|دفعة مقدمة من العميل
investition|استثمار
investitionsbedarf|الحاجة الاستثمارية
investitionsentscheidung|قرار استثماري
investitionsrechnung|حسابات تقييم الاستثمار
investitionskosten|تكاليف الاستثمار
investitionsgüter|سلع استثمارية
anschaffungswert|قيمة الاقتناء
restwert|القيمة المتبقية
wiederbeschaffungswert|قيمة إعادة الشراء
buchwert|القيمة الدفترية
abschreibungsbetrag|مبلغ الإهلاك
abschreibungssatz|نسبة الإهلاك
lineare abschreibung|إهلاك خطي
degressive abschreibung|إهلاك متناقص
kalkulatorische abschreibung|إهلاك احتسابي
kalkulatorische kosten|تكاليف احتسابية
kalkulatorischer zins|فائدة احتسابية
amortisation|استرداد الاستثمار
amortisationsrechnung|حساب مدة الاسترداد
rentabilitätsrechnung|حساب الربحية
vergleichsrechnung|حساب المقارنة
kostenvergleichsrechnung|حساب مقارنة التكاليف
gewinnvergleichsrechnung|حساب مقارنة الأرباح
nutzwertverfahren|طريقة تحليل المنفعة
barwert|القيمة الحالية
abzinsung|خصم القيمة المستقبلية
aufzinsung|تركيب الفائدة
cashflow|التدفق النقدي
mittelzufluss|تدفق نقدي داخل
mittelabfluss|تدفق نقدي خارج
zahlungsstrom|تدفق المدفوعات
liquiditätsplanung|تخطيط السيولة
liquiditätsengpass|نقص السيولة
liquiditätsreserve|احتياطي السيولة
umsatzrentabilität|العائد على المبيعات
gesamtkapitalrentabilität|العائد على إجمالي رأس المال
umschlagshäufigkeit|معدل دوران المخزون
lagerumschlag|دوران المخزون
lagerdauer|مدة التخزين
lagerbestand|مخزون المستودع
mindestbestand|الحد الأدنى للمخزون
höchstbestand|الحد الأقصى للمخزون
meldebestand|مستوى إعادة الطلب
sicherheitsbestand|المخزون الاحتياطي
durchschnittsbestand|متوسط المخزون
bestellmenge|كمية الطلب
optimale bestellmenge|كمية الطلب المثلى
bestellkosten|تكاليف الطلب
lagerkosten|تكاليف التخزين
fehlmengenkosten|تكاليف نقص المخزون
beschaffungskosten|تكاليف التوريد
beschaffungsmarkt|سوق التوريد
beschaffungsplanung|تخطيط المشتريات
beschaffungsprozess|عملية المشتريات
bezugsquelle|مصدر التوريد
lieferantenauswahl|اختيار المورد
lieferantenbewertung|تقييم المورد
lieferfähigkeit|القدرة على التسليم
liefertreue|الالتزام بمواعيد التسليم
lieferbedingung|شرط التسليم
lieferumfang|نطاق التوريد
liefermenge|كمية التسليم
liefertermin|موعد التسليم
wareneingang|استلام البضائع
wareneingangsprüfung|فحص البضائع الواردة
mängelrüge|إخطار بوجود عيب
rügepflicht|واجب الإخطار بالعيب
untersuchungspflicht|واجب فحص البضاعة
handelskauf|بيع تجاري
verbrauchsgüterkauf|بيع سلعة استهلاكية
fernabsatzvertrag|عقد بيع عن بعد
haustürgeschäft|معاملة خارج مقر العمل
widerrufsfrist|مهلة العدول
verbraucher|مستهلك
unternehmer|صاحب عمل / تاجر
verbrauchereigenschaft|صفة المستهلك
eigentumsübertragung|نقل الملكية
besitzübergang|انتقال الحيازة
besitz|حيازة
eigentum|ملكية
gutgläubiger erwerb|اكتساب بحسن نية
leistungsgefahr|مخاطر استحالة الأداء
preisgefahr|مخاطر تحمل الثمن
mangelanzeige|إشعار بالعيب
mangelbeseitigung|إزالة العيب
mängelanspruch|حق ناشئ عن العيب
gewährleistungsfrist|مدة الضمان القانوني
garantieanspruch|حق ناشئ عن الضمان الطوعي
herstellergarantie|ضمان الشركة المصنعة
beweislast|عبء الإثبات
beweislastumkehr|عكس عبء الإثبات
arglistige täuschung|تدليس متعمد
irrtum|غلط قانوني
drohung|تهديد
anfechtungsgrund|سبب الطعن
anfechtungsfrist|مهلة الطعن
empfangsbedürftige willenserklärung|إعلان إرادة واجب الوصول
zugang einer willenserklärung|وصول إعلان الإرادة
abgabe einer willenserklärung|إصدار إعلان الإرادة
rechtsbindungswille|نية الالتزام القانوني
essentialia negotii|العناصر الجوهرية للعقد
geschäftswille|إرادة إجراء التصرف
erklärungsbewusstsein|إدراك إصدار التصريح
handlungswille|إرادة الفعل
vertretbarer irrtum|غلط يمكن تبريره
natürliche person|شخص طبيعي
juristische person|شخص اعتباري
rechtsfähige personengesellschaft|شركة أشخاص ذات أهلية قانونية
deliktsfähigkeit|أهلية المسؤولية التقصيرية
strafmündigkeit|سن المسؤولية الجنائية
aufsichtspflicht|واجب الإشراف
beschäftigtenvertretung|تمثيل العاملين
belegschaft|مجمل العاملين
betriebszugehörigkeit|مدة الانتماء للمنشأة
betriebsgröße|حجم المنشأة
betriebsänderung|تغيير جوهري في المنشأة
betriebsübergang|انتقال المنشأة إلى مالك جديد
interessenausgleich|تسوية المصالح
sozialplan|خطة اجتماعية
wahlberechtigung|أهلية الانتخاب
wählbarkeit|أهلية الترشح
wahlvorstand|لجنة الانتخابات
amtszeit|مدة الولاية
freistellungsanspruch|حق الإعفاء من العمل
betriebsratsmitglied|عضو مجلس العاملين
betriebsratsvorsitzender|رئيس مجلس العاملين
einigungsstelle|هيئة التوفيق
zustimmungsverweigerung|رفض الموافقة
personelle einzelmaßnahme|إجراء فردي متعلق بالموظفين
einstellungsgespräch|مقابلة توظيف
stellenausschreibung|إعلان وظيفة
bewerbungsverfahren|إجراء التوظيف
bewerbungsunterlagen|مستندات التقديم للوظيفة
vorstellungsgespräch|مقابلة عمل
einstellungsentscheidung|قرار التوظيف
personalbedarf|الحاجة إلى الموظفين
personalplanung|تخطيط الموارد البشرية
personalbeschaffung|استقطاب الموظفين
personalentwicklung|تطوير الموظفين
personalabbau|خفض عدد الموظفين
personalakte|ملف الموظف
arbeitszeugnisanspruch|حق الحصول على شهادة عمل
einfaches arbeitszeugnis|شهادة عمل بسيطة
qualifiziertes arbeitszeugnis|شهادة عمل مفصلة
zeugnissprache|لغة الصياغة في شهادات العمل
wohlwollend|بصياغة منصفة وإيجابية
arbeitsunfähigkeitsbescheinigung|شهادة عدم القدرة على العمل
krankmeldung|إبلاغ بالمرض
anzeigepflicht bei krankheit|واجب الإبلاغ عند المرض
nachweispflicht bei krankheit|واجب إثبات المرض
wartezeit|فترة انتظار الاستحقاق
entgeltanspruch|استحقاق الأجر
entgeltgruppe|فئة الأجر
tarifgruppe|فئة الاتفاقية الجماعية
lohngruppe|فئة الأجر
grundvergütung|الأجر الأساسي
leistungszulage|علاوة أداء
sonderzahlung|دفعة خاصة
weihnachtsgeld|مكافأة عيد الميلاد
urlaubsgeld|بدل الإجازة
vermögenswirksame leistung|مساهمة ادخارية من صاحب العمل
sachbezug|منفعة عينية
geldwerter vorteil|منفعة ذات قيمة مالية
nettobezug|صافي المستحقات
bruttobezug|إجمالي المستحقات
steuerfreibetrag|إعفاء ضريبي
grundfreibetrag|الإعفاء الأساسي
werbungskosten|نفقات مرتبطة بالعمل
sonderausgaben|نفقات خاصة قابلة للخصم
steuerpflicht|الخضوع للضريبة
steuerpflichtig|خاضع للضريبة
steuerfrei|معفى من الضريبة
einkommensteuer|ضريبة الدخل
kirchensteuer|ضريبة الكنيسة
solidaritätszuschlag|رسم التضامن
umsatzsteuer|ضريبة القيمة المضافة
vorsteuer|ضريبة المدخلات
mehrwertsteuer|ضريبة القيمة المضافة
steuerbemessungsgrundlage|وعاء الضريبة
steuerbescheid|قرار ضريبي
steuererklärung|إقرار ضريبي
lohnsteuerbescheinigung|شهادة ضريبة الأجور
sozialversicherungsbeitrag|اشتراك التأمين الاجتماعي
arbeitgeberanteil|حصة صاحب العمل
arbeitnehmeranteil|حصة العامل
gesamtsozialversicherungsbeitrag|إجمالي اشتراك التأمين الاجتماعي
beitragszahlung|دفع الاشتراك
beitragsnachweis|بيان الاشتراكات
beitragserhebung|تحصيل الاشتراكات
beitragsfreiheit|الإعفاء من الاشتراك
familienversicherung|تأمين عائلي
pflichtmitgliedschaft|عضوية إلزامية
freiwillige versicherung|تأمين اختياري
private krankenversicherung|تأمين صحي خاص
gesetzliche krankenversicherung|تأمين صحي قانوني
krankengeld|بدل المرض
pflegebedürftigkeit|الحاجة إلى الرعاية
pflegegrad|درجة الحاجة إلى الرعاية
altersrente|معاش الشيخوخة
hinterbliebenenrente|معاش الورثة
witwenrente|معاش الأرملة
waisenrente|معاش اليتيم
wartezeit der rentenversicherung|فترة التأهل لتأمين التقاعد
arbeitsförderung|دعم التوظيف
arbeitsvermittlung|وساطة التوظيف
arbeitsagentur|وكالة العمل
arbeitsuchend|باحث عن عمل
arbeitslosmeldung|تسجيل البطالة
sperrzeit|فترة إيقاف الإعانة
anwartschaftszeit|مدة التأهل للاستحقاق
kurzarbeit|عمل بساعات مخفضة
berufskrankheit|مرض مهني
unfallanzeige|بلاغ حادث
heilbehandlung|علاج طبي
verletztenrente|معاش إصابة
prävention|وقاية
rehabilitation|إعادة تأهيل
berufliche wiedereingliederung|إعادة الإدماج المهني
stufenweise wiedereingliederung|إعادة إدماج تدريجية
arbeitsplatzgestaltung|تصميم مكان العمل
ergonomie|بيئة عمل مريحة وآمنة
gesundheitsschutz|حماية الصحة
gefährdungsfaktor|عامل خطر مهني
schutzvorkehrung|إجراء وقائي
sicherheitsbeauftragter|مسؤول السلامة
fachkraft für arbeitssicherheit|أخصائي السلامة المهنية
betriebsarzt|طبيب المنشأة
ersthelfer|مسعف أولي
fluchtweg|طريق الإخلاء
rettungsweg|طريق الإنقاذ
sammelstelle|نقطة التجمع
brandschutzordnung|لائحة الوقاية من الحريق
brandschutzbeauftragter|مسؤول الوقاية من الحريق
brandbekämpfung|مكافحة الحريق
feuerlöscheinrichtung|معدات إطفاء الحريق
sicherheitskennzeichnung|علامات السلامة
verbotszeichen|علامة منع
warnzeichen|علامة تحذير
gebotszeichen|علامة إلزام
rettungszeichen|علامة إنقاذ
brandschutzzeichen|علامة مكافحة الحريق
betriebsgefahr|خطر تشغيلي
arbeitsplatzgrenzwert|حد التعرض في مكان العمل
fehlertoleranz|تحمل الأخطاء
fehlertoleranzmechanismus|آلية تحمل الأخطاء
fehlererkennung|اكتشاف الخطأ
fehlerkorrekturverfahren|آلية تصحيح الأخطاء
fehlerisolierung|عزل الخطأ
fehlerfortpflanzung|انتشار الخطأ
fehlerzustand|حالة خطأ
fehlerklasse|فئة الخطأ
fehlerhäufigkeit|معدل تكرار الأخطاء
fehlerquote|نسبة الأخطاء
fehlerfreiheit|الخلو من الأخطاء
fehlersicherheit|الأمان عند حدوث الخطأ
ausfallwahrscheinlichkeit|احتمال التعطل
ausfallursache|سبب التعطل
ausfallwirkung|أثر التعطل
ausfallrisiko|مخاطر التعطل
ausfallkonzept|مفهوم التعامل مع التعطل
ausfallüberbrückung|تجاوز مدة التعطل مؤقتًا
ausweichsystem|نظام بديل
ersatzsystem|نظام احتياطي بديل
reservesystem|نظام احتياطي
redundanzkonzept|مفهوم التكرار الاحتياطي
redundanzgruppe|مجموعة تكرار احتياطي
redundanzverfahren|آلية التكرار الاحتياطي
aktiv-passiv-betrieb|تشغيل نشط وخامل
aktiv-aktiv-betrieb|تشغيل نشط مزدوج
lastumschaltung|تحويل الحمل
automatische umschaltung|تحويل تلقائي
manuelle umschaltung|تحويل يدوي
failover-cluster|عنقود تحويل تلقائي عند الفشل
clusterknoten|عقدة عنقود
clusterressource|مورد عنقود
clusterverwaltung|إدارة العنقود
clusterzustand|حالة العنقود
quorum|نصاب العنقود
split-brain-situation|انقسام العنقود إلى جزأين مستقلين
hochverfügbarkeitslösung|حل عالي التوافر
verfügbarkeitsklasse|فئة التوافر
verfügbarkeitskennzahl|مؤشر التوافر
verfügbarkeitsmessung|قياس التوافر
betriebsdauer|مدة التشغيل
mittlere ausfallzeit|متوسط مدة التعطل
mittlere reparaturzeit|متوسط زمن الإصلاح
mittlere betriebsdauer zwischen ausfällen|متوسط زمن التشغيل بين الأعطال
wiederanlaufpunkt|نقطة إعادة التشغيل
wiederanlaufverfahren|إجراء إعادة التشغيل
wiederanlaufreihenfolge|ترتيب إعادة التشغيل
wiederanlaufprüfung|اختبار إعادة التشغيل
wiederherstellungsplan|خطة الاستعادة
wiederherstellungsablauf|سير الاستعادة
wiederherstellungspriorität|أولوية الاستعادة
wiederherstellungsanforderung|متطلب الاستعادة
wiederherstellungskapazität|قدرة الاستعادة
wiederherstellungsmedium|وسيط الاستعادة
wiederherstellungsprotokoll|سجل الاستعادة
sicherungsfenster|نافذة النسخ الاحتياطي
sicherungslauf|عملية نسخ احتياطي
sicherungsauftrag|مهمة نسخ احتياطي
sicherungsstatus|حالة النسخ الاحتياطي
sicherungsfehler|خطأ النسخ الاحتياطي
sicherungsprüfung|فحص النسخة الاحتياطية
sicherungsvalidierung|التحقق من صلاحية النسخة الاحتياطية
sicherungsverschlüsselung|تشفير النسخة الاحتياطية
sicherungskomprimierung|ضغط النسخة الاحتياطية
sicherungsbestand|مجموعة النسخ الاحتياطية
sicherungskette|سلسلة النسخ الاحتياطية
sicherungsrotation|تدوير النسخ الاحتياطية
sicherungsrepository|مستودع النسخ الاحتياطية
offline-sicherung|نسخة احتياطية غير متصلة
online-sicherung|نسخة احتياطية أثناء التشغيل
außerhauslagerung|تخزين خارج الموقع
medienwechsel|تبديل وسيط التخزين
medienbruch|انتقال بين وسائط مختلفة
aufbewahrungsregel|قاعدة الاحتفاظ
aufbewahrungsdauer|مدة الاحتفاظ
löschfrist|مهلة الحذف
löschkonzept|مفهوم الحذف
löschregel|قاعدة الحذف
löschverfahren|إجراء الحذف
datenträgervernichtung|إتلاف وسيط البيانات
sichere löschung|حذف آمن
überschreibverfahren|طريقة الكتابة فوق البيانات
datenträgerbereinigung|تنظيف وسيط البيانات
datenklassifizierung|تصنيف البيانات
schutzklasse|فئة الحماية
vertraulichkeitsstufe|مستوى السرية
geheimhaltungsstufe|درجة السرية
informationswert|قيمة المعلومات
informationsbedarf|الحاجة إلى المعلومات
informationsfluss|تدفق المعلومات
informationsaustausch|تبادل المعلومات
informationsverarbeitung|معالجة المعلومات
informationsspeicherung|تخزين المعلومات
informationsübertragung|نقل المعلومات
informationszugang|الوصول إلى المعلومات
informationsbestand|رصيد المعلومات
informationslebenszyklus|دورة حياة المعلومات
informationssicherheitsmanagement|إدارة أمن المعلومات
informationssicherheitsbeauftragter|مسؤول أمن المعلومات
sicherheitsorganisation|تنظيم الأمن
sicherheitsverantwortlicher|المسؤول عن الأمن
sicherheitsbewertung|تقييم الأمن
sicherheitsprüfung|فحص أمني
sicherheitsüberwachung|مراقبة أمنية
sicherheitsprotokollierung|تسجيل الأحداث الأمنية
sicherheitskontrolle|ضابط أمني
sicherheitsfreigabe|موافقة أمنية
sicherheitsrelevanz|صلة أمنية
sicherheitskritisch|حساس أمنيًا
sicherheitsgefährdung|تهديد للأمن
sicherheitsverletzung|انتهاك أمني
schutzwirkung|أثر الحماية
schutzumfang|نطاق الحماية
schutzkonzept|مفهوم الحماية
schutzstufe|مستوى الحماية
schutzprofil|ملف الحماية
schutzobjekt|عنصر مطلوب حمايته
schutzmechanismus|آلية حماية
schutzfunktion|وظيفة حماية
schutzlücke|فجوة حماية
risikobehandlung|معالجة المخاطر
risikominderung|خفض المخاطر
risikovermeidung|تجنب المخاطر
risikoübertragung|نقل المخاطر
risikoakzeptanz|قبول المخاطر
risikoeigentümer|مالك المخاطر
risikoklasse|فئة المخاطر
risikostufe|مستوى المخاطر
risikokennzahl|مؤشر المخاطر
risikomatrix|مصفوفة المخاطر
risikofaktor|عامل خطر
risikoquelle|مصدر الخطر
risikoszenario|سيناريو المخاطر
risikobeurteilung|تقدير المخاطر
risikosteuerung|التحكم في المخاطر
gefährdungslage|حالة التهديد
bedrohungsanalyse|تحليل التهديدات
bedrohungsmodell|نموذج التهديدات
bedrohungsquelle|مصدر التهديد
angriffspotenzial|إمكانات الهجوم
angriffsmöglichkeit|إمكانية الهجوم
angriffspunkt|نقطة هجوم
angriffsweg|مسار الهجوم
angriffsmuster|نمط الهجوم
angriffserfolg|نجاح الهجوم
angriffsversuch|محاولة هجوم
schwachstellenbewertung|تقييم الثغرات
schwachstellenmanagement|إدارة الثغرات
schwachstellenscanner|ماسح الثغرات
schwachstellenbericht|تقرير الثغرات
schwachstellenbehebung|معالجة الثغرات
verwundbarkeit|قابلية التعرض للهجوم
härtungsmaßnahme|إجراء تقوية أمني
systemhärtung|تقوية النظام أمنيًا
konfigurationshärtung|تقوية الإعدادات
minimalkonfiguration|إعداد بالحد الأدنى الضروري
standardkonfiguration|إعداد قياسي
sichere grundkonfiguration|إعداد أساسي آمن
unnötiger dienst|خدمة غير ضرورية
standardkennwort|كلمة مرور افتراضية
sicherheitsvorgabe|متطلب أمني ملزم
prüfrichtlinie|سياسة تدقيق
überwachungsrichtlinie|سياسة مراقبة
protokollierungsrichtlinie|سياسة التسجيل
kennwortablauf|انتهاء صلاحية كلمة المرور
kennworthistorie|سجل كلمات المرور السابقة
fehlversuchssperre|قفل بعد محاولات فاشلة
anmeldesperre|قفل تسجيل الدخول
anmeldeinformation|بيانات تسجيل الدخول
anmeldeereignis|حدث تسجيل دخول
abmeldeereignis|حدث تسجيل خروج
sitzungskennung|معرّف الجلسة
sitzungsschlüssel|مفتاح الجلسة
sitzungszeitlimit|الحد الزمني للجلسة
sitzungsbeendigung|إنهاء الجلسة
kontenverwaltung|إدارة الحسابات
kontenrichtlinie|سياسة الحسابات
kontenerstellung|إنشاء الحسابات
kontenlöschung|حذف الحسابات
kontendeaktivierung|تعطيل الحسابات
kontenprüfung|مراجعة الحسابات
verwaistes konto|حساب مهجور دون مالك
privilegiertes konto|حساب ذو صلاحيات مرتفعة
administratorkonto|حساب مسؤول النظام
notfallkonto|حساب للطوارئ
dienstbenutzer|مستخدم خدمة
funktionskonto|حساب وظيفي مشترك
rollenbasierte zugriffskontrolle|تحكم في الوصول قائم على الأدوار
attributbasierte zugriffskontrolle|تحكم في الوصول قائم على السمات
minimalprinzip der berechtigungen|مبدأ الحد الأدنى من الصلاحيات
funktionstrennung|فصل المهام
vier-augen-prinzip|مبدأ المراجعة من شخصين
berechtigungsanforderung|طلب صلاحية
berechtigungsfreigabe|الموافقة على الصلاحية
berechtigungsentzug|سحب الصلاحية
berechtigungsänderung|تغيير الصلاحية
berechtigungsrezertifizierung|إعادة اعتماد الصلاحيات
berechtigungsmatrix|مصفوفة الصلاحيات
berechtigungsvererbung|وراثة الصلاحيات
zugriffsentscheidung|قرار السماح بالوصول
zugriffsanforderung|طلب وصول
zugriffsfreigabe|الموافقة على الوصول
zugriffsentzug|سحب الوصول
zugriffsereignis|حدث وصول
zugriffsnachweis|دليل على الوصول
zugriffszeitpunkt|وقت الوصول
zugriffsquelle|مصدر الوصول
zugriffsziel|وجهة الوصول
protokollintegrität|سلامة السجل
revisionssicherheit|قابلية التدقيق دون تلاعب
revisionsprotokoll|سجل التدقيق
prüfpfad|مسار التدقيق
auditnachweis|دليل التدقيق
manipulationsschutz|حماية من التلاعب
manipulationserkennung|اكتشاف التلاعب
beweissicherung|حفظ الأدلة
beweiskette|سلسلة حفظ الأدلة
forensische analyse|تحليل جنائي رقمي
vorfallsanalyse|تحليل الحادث
vorfallsbehandlung|معالجة الحادث
vorfallsreaktion|الاستجابة للحادث
vorfallsmeldung|بلاغ حادث
reaktionsplan|خطة الاستجابة
eindämmungsmaßnahme|إجراء احتواء
bereinigungsmaßnahme|إجراء إزالة آثار الهجوم
nachbereitung|مراجعة ما بعد الحادث
ursprungsanalyse|تحليل السبب الجذري
netzredundanz|تكرار احتياطي للشبكة
leitungsredundanz|تكرار احتياطي للخطوط
wegeredundanz|تكرار احتياطي للمسارات
geräteredundanz|تكرار احتياطي للأجهزة
gatewayredundanz|تكرار احتياطي للبوابة
routerredundanz|تكرار احتياطي للموجّه
switchredundanz|تكرار احتياطي للمبدّل
verbindungsredundanz|تكرار احتياطي للاتصال
netzverfügbarkeit|توافر الشبكة
verbindungsverfügbarkeit|توافر الاتصال
leitungsverfügbarkeit|توافر الخط
netzkapazität|سعة الشبكة
leitungskapazität|سعة الخط
übertragungskapazität|سعة النقل
netzdurchsatz|معدل مرور الشبكة
paketdurchsatz|معدل مرور الحزم
nutzdatendurchsatz|معدل مرور البيانات الفعلية
bruttodatenrate|معدل البيانات الإجمالي
nettodatenrate|معدل البيانات الصافي
übertragungsverzögerung|تأخير النقل
ausbreitungsverzögerung|تأخير الانتشار
verarbeitungsverzögerung|تأخير المعالجة
warteschlangenverzögerung|تأخير قائمة الانتظار
umlaufzeit|زمن الذهاب والعودة
antwortzeit|زمن الاستجابة
paketumlaufzeit|زمن ذهاب الحزمة وعودتها
verzögerungsschwankung|تذبذب التأخير
paketverlustrate|نسبة فقد الحزم
fehlerhafte pakete|حزم معيبة
verworfenes paket|حزمة مُسقطة
paketwiederholung|إعادة إرسال الحزمة
netzwerkengpass|عنق زجاجة في الشبكة
bandbreitenbedarf|الحاجة إلى عرض النطاق
bandbreitenbegrenzung|تحديد عرض النطاق
bandbreitenreservierung|حجز عرض النطاق
dienstgüte|جودة الخدمة
verkehrsklasse|فئة حركة البيانات
verkehrspriorisierung|ترتيب حركة البيانات حسب الأولوية
warteschlangenverwaltung|إدارة قوائم الانتظار
lastenausgleich|موازنة الحمل
lastverteiler|موازن الحمل
verbindungsverteilung|توزيع الاتصالات
verkehrsverteilung|توزيع حركة البيانات
netzwerkpfad|مسار الشبكة
ausweichroute|مسار بديل
ersatzroute|مسار احتياطي
routenwahl|اختيار المسار
routenberechnung|حساب المسار
routenankündigung|إعلان المسار
routenverteilung|توزيع المسارات
routenfilterung|ترشيح المسارات
routenzusammenfassung|تلخيص المسارات
routenkonvergenz|تقارب جداول التوجيه
konvergenzzeit|زمن التقارب
nachbarschaftsbeziehung|علاقة جوار بين الموجّهات
verbindungszustandsprotokoll|بروتوكول حالة الوصلة
distanzvektorprotokoll|بروتوكول متجه المسافة
pfadvektorprotokoll|بروتوكول متجه المسار
autonomes system|نظام مستقل في التوجيه
systemnummer|رقم النظام المستقل
interne route|مسار داخلي
externe route|مسار خارجي
routingdomäne|نطاق توجيه
routingschleife|حلقة توجيه
schleifenerkennung|اكتشاف الحلقة
sprungzahl|عدد القفزات
standardmetrik|مقياس افتراضي
administrative distanz|مسافة إدارية
präfixübereinstimmung|مطابقة البادئة
längste präfixübereinstimmung|أطول مطابقة للبادئة
routensuche|البحث عن مسار
weiterleitungspfad|مسار إعادة التوجيه
paketlaufzeit|زمن انتقال الحزمة
fragmentierung|تجزئة الحزمة
fragmentgröße|حجم الجزء
pfad-mtu|أقصى حجم نقل على المسار
mtu-erkennung|اكتشاف أقصى حجم نقل
icmp-fehlermeldung|رسالة خطأ ICMP
netzwerkmaske|قناع الشبكة
wildcard-maske|قناع عكسي
subnetzbildung|إنشاء الشبكات الفرعية
subnetzaufteilung|تقسيم الشبكة إلى شبكات فرعية
subnetzberechnung|حساب الشبكة الفرعية
subnetzgrenze|حد الشبكة الفرعية
subnetzgröße|حجم الشبكة الفرعية
subnetznummer|رقم الشبكة الفرعية
subnetzbedarf|الحاجة إلى شبكات فرعية
hostbedarf|عدد المضيفين المطلوب
adressverschwendung|هدر العناوين
variable präfixlänge|طول بادئة متغير
klassenlose adressierung|عنونة بلا فئات
klassenbehaftete adressierung|عنونة قائمة على الفئات
adressknappheit|ندرة العناوين
adresskonflikt|تعارض العناوين
doppelte ip-adresse|عنوان IP مكرر
automatische adressvergabe|تخصيص تلقائي للعناوين
dynamische adressvergabe|تخصيص ديناميكي للعناوين
statische adressvergabe|تخصيص ثابت للعناوين
adressgültigkeit|مدة صلاحية العنوان
lease-erneuerung|تجديد تأجير العنوان
lease-ablauf|انتهاء تأجير العنوان
dhcp-weiterleitung|ترحيل DHCP
dhcp-ausfallsicherheit|مقاومة أعطال DHCP
dhcp-reservierung|حجز DHCP
dns-weiterleitung|إعادة توجيه DNS
bedingte weiterleitung|إعادة توجيه DNS مشروطة
stammhinweis|تلميح إلى خادم جذر
zonentransfer|نقل منطقة DNS
inkrementeller zonentransfer|نقل تزايدي لمنطقة DNS
vollständiger zonentransfer|نقل كامل لمنطقة DNS
zonenreplikation|نسخ منطقة DNS
zonenintegrität|سلامة منطقة DNS
dns-zwischenspeicher|ذاكرة DNS المؤقتة
negativer cacheeintrag|إدخال سلبي في الذاكرة المؤقتة
auflösungsreihenfolge|ترتيب حل الأسماء
auflösungsfehler|خطأ حل الأسماء
namensauflösungsproblem|مشكلة في حل الأسماء
kanonischer name|اسم قانوني بديل
mailaustauschserver|خادم تبادل البريد
dienstlokalisierung|تحديد موقع الخدمة
reverse-lookup|بحث عكسي عن الاسم
vorwärtsauflösung|حل الاسم إلى عنوان
rückwärtsauflösung|حل العنوان إلى اسم
adressumsetzung|تحويل العنوان
statische adressumsetzung|تحويل ثابت للعناوين
dynamische adressumsetzung|تحويل ديناميكي للعناوين
portumsetzung|تحويل المنافذ
übersetzungstabelle|جدول تحويل العناوين
übersetzungseintrag|إدخال تحويل
innenadresse|عنوان داخلي
außenadresse|عنوان خارجي
quelladressübersetzung|تحويل عنوان المصدر
zieladressübersetzung|تحويل عنوان الوجهة
portweiterleitung|إعادة توجيه منفذ
vpn-tunnel|نفق VPN
tunnelaufbau|إنشاء النفق
tunnelendpunkt|نقطة نهاية النفق
tunnelprotokoll|بروتوكول النفق
tunnelverschlüsselung|تشفير النفق
standortkopplung|ربط المواقع
fernzugangs-vpn|شبكة VPN للوصول البعيد
standort-vpn|شبكة VPN بين المواقع
vollständiger tunnel|نفق كامل لحركة البيانات
geteilter tunnel|نفق مقسّم
vpn-gateway|بوابة VPN
vpn-verbindungsaufbau|إنشاء اتصال VPN
vpn-authentifizierung|مصادقة VPN
schlüsselaushandlung|التفاوض على المفتاح
sicherheitsassoziation|ارتباط أمني
paketkapselung|تغليف الحزم
vlan-segmentierung|تجزئة الشبكة باستخدام VLAN
vlan-konfiguration|إعداد VLAN
vlan-datenbank|قاعدة بيانات VLAN
vlan-bereich|نطاق معرفات VLAN
vlan-priorität|أولوية VLAN
vlan-markierung|وسم VLAN
portzuweisung|إسناد المنفذ
portbündel|حزمة منافذ
verbindungsbündelung|تجميع الوصلات
stammverbindung|وصلة جذع
zugangsverbindung|وصلة وصول
schleifenschutz|حماية من حلقات الشبكة
topologieänderung|تغير الطوبولوجيا
topologieerkennung|اكتشاف الطوبولوجيا
konvergenzereignis|حدث تقارب
blockierter port|منفذ محظور
weiterleitender port|منفذ في حالة تمرير
wurzelport|منفذ الجذر
designierter port|منفذ معيّن للشبكة
brückenpriorität|أولوية الجسر
portpriorität|أولوية المنفذ
hardwareadresse|عنوان عتادي
adresstabelle|جدول العناوين
adresslernvorgang|عملية تعلم العناوين
adressalterung|تقادم إدخالات العناوين
unbekannter unicast|إرسال أحادي إلى عنوان مجهول
broadcast-sturm|عاصفة بث
sturmbegrenzung|تحديد عاصفة البث
portspiegelung|نسخ حركة منفذ للمراقبة
schnittstellenzähler|عداد الواجهة
schnittstellenfehler|خطأ الواجهة
duplexkonflikt|تعارض نمط الإرسال المزدوج
geschwindigkeitsaushandlung|التفاوض على السرعة
medienkonverter|محوّل وسائط
glasfaserstrecke|مسار ألياف ضوئية
faserbruch|انقطاع في الليف
steckerdämpfung|توهين الموصل
spleißdämpfung|توهين الوصلة الملحومة
leistungsbudget|ميزانية القدرة الضوئية
wellenausbreitung|انتشار الموجة
funkstörung|تشويش لاسلكي
funkreichweite|مدى الإشارة اللاسلكية
funkzelle|خلية لاسلكية
kanalplanung|تخطيط القنوات
frequenzband|نطاق التردد
frequenzbereich|مجال التردد
sendestärke|قدرة الإرسال
empfangsstärke|قوة الاستقبال
signal-rausch-abstand|نسبة الإشارة إلى الضوضاء
funkvermessung|مسح الشبكة اللاسلكية
zugangspunktdichte|كثافة نقاط الوصول
client-isolation|عزل العملاء اللاسلكيين
gastnetz|شبكة ضيوف
wlan-verschlüsselung|تشفير الشبكة اللاسلكية
wlan-authentifizierung|مصادقة الشبكة اللاسلكية
wlan-sicherheitsmodus|وضع أمان الشبكة اللاسلكية
systeminventar|جرد الأنظمة
hardwareinventar|جرد العتاد
softwareinventar|جرد البرمجيات
konfigurationsbestand|رصيد الإعدادات
konfigurationselement|عنصر إعداد
konfigurationsstand|حالة الإعداد
konfigurationsbaseline|خط أساس للإعداد
konfigurationsabweichung|انحراف عن الإعداد المعتمد
konfigurationssicherung|نسخة احتياطية من الإعداد
konfigurationswiederherstellung|استعادة الإعداد
konfigurationsprüfung|فحص الإعداد
konfigurationsfehler|خطأ في الإعداد
konfigurationsdatei|ملف إعداد
konfigurationsparameter|معامل إعداد
konfigurationswert|قيمة إعداد
konfigurationsmanagement|إدارة الإعدادات
änderungsmanagement|إدارة التغييرات
änderungsbewertung|تقييم التغيير
änderungsplanung|تخطيط التغيير
änderungsumsetzung|تنفيذ التغيير
änderungsprüfung|فحص التغيير
änderungsprotokoll|سجل التغييرات
änderungshistorie|سجل تاريخ التغييرات
änderungsumfang|نطاق التغيير
änderungsgrund|سبب التغيير
änderungszeitpunkt|وقت التغيير
änderungsverantwortlicher|المسؤول عن التغيير
wartungszustand|حالة الصيانة
wartungsmodus|وضع الصيانة
wartungsintervall|فاصل الصيانة
wartungsaufwand|جهد الصيانة
wartungskosten|تكاليف الصيانة
wartungsvertrag|عقد صيانة
wartungszugang|وصول للصيانة
fernwartungszugang|وصول للصيانة عن بعد
systempflege|العناية بالنظام وتحديثه
patchverwaltung|إدارة الرقع
patchstand|مستوى الرقع
patchzyklus|دورة الرقع
patchfreigabe|الموافقة على الرقعة
patchverteilung|توزيع الرقع
patchinstallation|تثبيت الرقعة
patchprüfung|اختبار الرقعة
sicherheitsbehebung|إصلاح أمني
aktualisierungszyklus|دورة التحديث
aktualisierungsstand|مستوى التحديث
aktualisierungsfehler|خطأ التحديث
aktualisierungsprüfung|فحص التحديثات
bereitstellungsserver|خادم النشر
bereitstellungspaket|حزمة النشر
bereitstellungsziel|هدف النشر
bereitstellungsstatus|حالة النشر
bereitstellungsfehler|خطأ النشر
bereitstellungsautomatisierung|أتمتة النشر
installationspaket|حزمة تثبيت
installationsquelle|مصدر التثبيت
installationsmedium|وسيط التثبيت
installationsroutine|إجراء التثبيت
installationsfehler|خطأ تثبيت
installationsstatus|حالة التثبيت
unbeaufsichtigte installation|تثبيت غير مراقب
automatisierte installation|تثبيت آلي
softwarepaketierung|حزم البرمجيات للنشر
paketformat|تنسيق الحزمة
paketindex|فهرس الحزم
paketmetadaten|بيانات وصفية للحزمة
paketversion|إصدار الحزمة
paketkonflikt|تعارض الحزم
paketaktualisierung|تحديث الحزمة
paketentfernung|إزالة الحزمة
abhängigkeitsauflösung|حل تبعيات الحزم
repository-spiegel|مرآة مستودع الحزم
prozessliste|قائمة العمليات
prozessbaum|شجرة العمليات
prozessgruppe|مجموعة عمليات
prozessraum|فضاء العملية
prozessspeicher|ذاكرة العملية
prozesslaufzeit|زمن تشغيل العملية
prozessauslastung|استخدام العملية للموارد
prozessüberwachung|مراقبة العمليات
prozesssteuerung|التحكم في العمليات
prozesssignal|إشارة عملية
prozessabbruch|إيقاف قسري للعملية
zombieprozess|عملية منتهية لم تُجمع حالتها
verwaister prozess|عملية يتيمة
daemonprozess|عملية خدمة في الخلفية
systemdienst|خدمة نظام
diensteinheit|وحدة خدمة
dienstdefinition|تعريف الخدمة
dienstkonfiguration|إعداد الخدمة
dienstüberwachung|مراقبة الخدمة
dienstprotokoll|سجل الخدمة
dienstfehler|خطأ خدمة
dienstneustart|إعادة تشغيل الخدمة
dienstunterbrechung|انقطاع الخدمة
dienstverfügbarkeit|توافر الخدمة
dienstwiederherstellung|استعادة الخدمة
startabhängigkeit|تبعية بدء التشغيل
startreihenfolge|ترتيب بدء التشغيل
systemstart|إقلاع النظام
systemstopp|إيقاف النظام
startphase|مرحلة الإقلاع
startfehler|خطأ الإقلاع
startprotokoll|سجل الإقلاع
startumgebung|بيئة الإقلاع
rettungsmodus|وضع الإنقاذ
einzelbenutzermodus|وضع المستخدم الواحد
laufzeitziel|هدف تشغيل النظام
dateisystemstruktur|بنية نظام الملفات
dateisystemtyp|نوع نظام الملفات
dateisystemgröße|حجم نظام الملفات
dateisystembelegung|إشغال نظام الملفات
dateisystemfehler|خطأ نظام الملفات
dateisystemreparatur|إصلاح نظام الملفات
dateisystemprüfung|فحص نظام الملفات
dateisystemberechtigung|صلاحية نظام الملفات
dateisystemverschlüsselung|تشفير نظام الملفات
dateisystemabbild|صورة نظام الملفات
verzeichniseintrag|إدخال مجلد
verzeichnispfad|مسار مجلد
verzeichnisberechtigung|صلاحية المجلد
verzeichniseigentümer|مالك المجلد
verzeichnisfreigabe|مشاركة مجلد
dateiattribut|سمة ملف
dateigröße|حجم الملف
dateityp|نوع الملف
dateiendung|امتداد الملف
dateiname|اسم الملف
dateiversion|إصدار الملف
dateiverknüpfung|رابط ملف
harte verknüpfung|رابط صلب
symbolische verknüpfung|رابط رمزي
verknüpfungsziel|هدف الرابط
inode-nummer|رقم inode
blockbelegung|إشغال الكتل
blockgröße|حجم الكتلة
fragmentierung des dateisystems|تجزؤ نظام الملفات
einbindevorgang|عملية تركيب نظام الملفات
aushängevorgang|عملية فصل نظام الملفات
automatische einbindung|تركيب تلقائي
temporäres dateisystem|نظام ملفات مؤقت
netzwerkdateisystem|نظام ملفات شبكي
protokollsuchlauf|بحث داخل السجلات
protokollfilter|مرشح السجل
protokollquelle|مصدر السجل
protokollformat|تنسيق السجل
protokollzeitpunkt|الطابع الزمني للسجل
protokollstufe|مستوى السجل
protokollmeldung|رسالة سجل
protokollsammlung|جمع السجلات
zentrale protokollierung|تسجيل مركزي
fernprotokollierung|تسجيل عن بعد
ereigniskorrelation|ربط الأحداث
ereignisquelle|مصدر الحدث
ereigniskategorie|فئة الحدث
ereigniskennung|معرّف الحدث
ereigniszeitpunkt|وقت الحدث
ereignisfilter|مرشح الأحداث
ereignisauswertung|تحليل الأحداث
überwachungssystem|نظام مراقبة
überwachungsagent|وكيل مراقبة
überwachungsintervall|فاصل المراقبة
überwachungsziel|هدف المراقبة
überwachungsstatus|حالة المراقبة
überwachungsdaten|بيانات المراقبة
überwachungsergebnis|نتيجة المراقبة
messwert|قيمة قياس
messgröße|كمية مقاسة
messintervall|فاصل القياس
messpunkt|نقطة قياس
messgenauigkeit|دقة القياس
alarmgrenze|حد الإنذار
alarmstufe|مستوى الإنذار
alarmierung|إرسال إنذار
alarmierungsweg|مسار إرسال الإنذار
benachrichtigungskanal|قناة الإشعار
kapazitätsplanung|تخطيط السعة
kapazitätsbedarf|الحاجة إلى السعة
kapazitätsgrenze|حد السعة
kapazitätsreserve|احتياطي السعة
kapazitätserweiterung|زيادة السعة
ressourcenbedarf|الحاجة إلى الموارد
ressourcenverbrauch|استهلاك الموارد
ressourcenauslastung|استخدام الموارد
ressourcengrenze|حد الموارد
ressourcenkonflikt|تعارض الموارد
prozessorlast|حمل المعالج
speicherlast|حمل الذاكرة
plattenauslastung|استخدام القرص
eingabe-ausgabe-last|حمل الإدخال والإخراج
leistungsengpass|عنق زجاجة في الأداء
engpassanalyse|تحليل عنق الزجاجة
leistungsmessung|قياس الأداء
leistungskennzahl|مؤشر أداء
leistungsprofil|ملف الأداء
leistungsoptimierung|تحسين الأداء
systemoptimierung|تحسين النظام
lastprofil|ملف الحمل
spitzenlast|حمل الذروة
grundlast|الحمل الأساسي
durchschnittslast|متوسط الحمل
verzeichnisreplikation|نسخ خدمة الدليل
replikationspartner|شريك النسخ المتماثل
replikationsverbindung|اتصال النسخ المتماثل
replikationsintervall|فاصل النسخ المتماثل
replikationsstatus|حالة النسخ المتماثل
replikationsfehler|خطأ النسخ المتماثل
replikationskonflikt|تعارض النسخ المتماثل
replikationstopologie|طوبولوجيا النسخ المتماثل
standortverknüpfung|رابط مواقع في خدمة الدليل
standortdefinition|تعريف موقع خدمة الدليل
standortzuordnung|إسناد الموقع
standortübergreifend|عبر عدة مواقع
globaler katalog|الفهرس العام
schemamaster|دور مسؤول مخطط الدليل
infrastrukturmaster|دور مسؤول بنية الدليل
rid-master|دور مسؤول معرّفات الكائنات
pdc-emulator|دور محاكي متحكم المجال الأساسي
domänennamenmaster|دور مسؤول أسماء المجالات
betriebsmasterrolle|دور تشغيل رئيسي
rolleninhaber|صاحب الدور
rollenübertragung|نقل الدور
rollenübernahme|الاستيلاء على الدور اضطراريًا
domänenfunktionsebene|المستوى الوظيفي للمجال
gesamtstrukturfunktionsebene|المستوى الوظيفي للغابة
domänenmitgliedschaft|عضوية المجال
domänenbeitritt|الانضمام إلى المجال
domänenabmeldung|إخراج الجهاز من المجال
domänenkonto|حساب مجال
lokales konto|حساب محلي
gruppenbereich|نطاق المجموعة
gruppentyp|نوع المجموعة
sicherheitsgruppe|مجموعة أمنية
verteilergruppe|مجموعة توزيع
gruppenverschachtelung|تداخل المجموعات
gruppenauflösung|حل عضوية المجموعات
tokenmitgliedschaft|عضوية مسجلة في رمز الوصول
zugriffstoken|رمز الوصول
sicherheitskennung|معرّف أمني
relativer bezeichner|معرّف نسبي
zugriffskontrollliste|قائمة التحكم في الوصول
zugriffskontrolleintrag|إدخال التحكم في الوصول
zulassen-berechtigung|صلاحية سماح
verweigern-berechtigung|صلاحية منع
effektive berechtigung|الصلاحية الفعلية
berechtigungsvererbung unterbrechen|قطع وراثة الصلاحيات
objektberechtigung|صلاحية كائن
objekteigentümer|مالك الكائن
verzeichnisobjekt|كائن في خدمة الدليل
objektklasse|فئة الكائن
objektattribut|سمة الكائن
attributschema|مخطط السمات
klassenschema|مخطط الفئات
schemaerweiterung|توسعة المخطط
distinguished name|الاسم المميز الكامل
relativer distinguished name|الاسم المميز النسبي
kanonischer objektname|الاسم القانوني للكائن
organisationseinheitenstruktur|بنية الوحدات التنظيمية
richtlinienverknüpfung|ربط نهج المجموعة
richtlinienvererbung|وراثة نهج المجموعة
richtlinienerzwingung|فرض نهج المجموعة
richtlinienblockierung|حظر وراثة النهج
richtlinienpriorität|أولوية النهج
richtlinienreihenfolge|ترتيب النهج
richtlinienaktualisierung|تحديث النهج
richtlinienergebnis|نتيجة تطبيق النهج
resultierender richtliniensatz|مجموعة النهج الناتجة
computerkonfiguration|إعداد الحاسوب
benutzerkonfiguration|إعداد المستخدم
anmeldeskript|برنامج نصي لتسجيل الدخول
abmeldeskript|برنامج نصي لتسجيل الخروج
startskript|برنامج نصي لبدء التشغيل
herunterfahrskript|برنامج نصي لإيقاف التشغيل
kennwortzurücksetzung|إعادة تعيين كلمة المرور
kontenentsperrung|إلغاء قفل الحساب
anmeldename|اسم تسجيل الدخول
benutzerprinzipalname|اسم المستخدم الرئيسي
vertrauensrichtung|اتجاه الثقة
einseitige vertrauensstellung|علاقة ثقة أحادية الاتجاه
beidseitige vertrauensstellung|علاقة ثقة ثنائية الاتجاه
transitive vertrauensstellung|علاقة ثقة انتقالية
nichttransitive vertrauensstellung|علاقة ثقة غير انتقالية
gesamtstrukturvertrauen|ثقة بين الغابات
domänenübergreifender zugriff|وصول عبر المجالات
datenbankinstanz|نسخة تشغيل من قاعدة البيانات
datenbankkatalog|كتالوج قاعدة البيانات
datenbankbenutzer|مستخدم قاعدة البيانات
datenbankrolle|دور قاعدة البيانات
datenbankberechtigung|صلاحية قاعدة البيانات
datenbankzugriff|الوصول إلى قاعدة البيانات
datenbankverbindung|اتصال قاعدة البيانات
verbindungszeichenfolge|سلسلة الاتصال
verbindungspool|مجموعة اتصالات جاهزة
datenbankdatei|ملف قاعدة البيانات
datendatei|ملف البيانات
protokolldatei der datenbank|ملف سجل قاعدة البيانات
tabellenbereich|مساحة الجداول
speicherstruktur|بنية التخزين
seitenstruktur|بنية الصفحات
datenseite|صفحة بيانات
indexseite|صفحة فهرس
zeilenspeicherung|تخزين قائم على الصفوف
spaltenspeicherung|تخزين قائم على الأعمدة
tabellenstruktur|بنية الجدول
tabellenspalte|عمود الجدول
tabellenzeile|صف الجدول
spaltendefinition|تعريف العمود
standardwert|قيمة افتراضية
pflichtfeld|حقل إلزامي
nullable-spalte|عمود يقبل القيمة الفارغة
identitätsspalte|عمود ترقيم تلقائي
eindeutiger index|فهرس فريد
zusammengesetzter index|فهرس مركب
gruppierter index|فهرس عنقودي
nichtgruppierter index|فهرس غير عنقودي
indexschlüssel|مفتاح الفهرس
indexfragmentierung|تجزؤ الفهرس
indexneuaufbau|إعادة بناء الفهرس
indexreorganisation|إعادة تنظيم الفهرس
statistikaktualisierung|تحديث الإحصاءات
abfragestatistik|إحصاءات الاستعلام
abfrageplan|خطة الاستعلام
plankosten|تكلفة خطة التنفيذ
planauswahl|اختيار خطة التنفيذ
abfrageleistung|أداء الاستعلام
abfragelaufzeit|زمن تشغيل الاستعلام
abfrageergebnis|نتيجة الاستعلام
ergebnismenge|مجموعة النتائج
sortierkriterium|معيار الفرز
filterbedingung|شرط التصفية
verknüpfungsbedingung|شرط الربط
auswahlbedingung|شرط الاختيار
gruppenbedingung|شرط المجموعة
spaltenalias|اسم بديل للعمود
tabellenalias|اسم بديل للجدول
kartesisches produkt|حاصل الضرب الديكارتي
selbstverbund|ربط الجدول بنفسه
kreuzverbund|ربط تقاطعي
gleichheitsverbund|ربط بالمساواة
halbverbund|ربط شبه داخلي
vereinigungsoperation|عملية اتحاد النتائج
schnittmengenoperation|عملية تقاطع النتائج
differenzoperation|عملية فرق النتائج
duplikatbeseitigung|إزالة النتائج المكررة
sortierreihenfolge|ترتيب الفرز
aufsteigende sortierung|فرز تصاعدي
absteigende sortierung|فرز تنازلي
fensterfunktion|دالة نافذة
rangfunktion|دالة ترتيب
gruppenergebnis|نتيجة مجمعة
skalare funktion|دالة عددية
benutzerdefinierte funktion|دالة يعرّفها المستخدم
trigger|مشغّل قاعدة بيانات
triggerereignis|حدث تشغيل المشغّل
transaktionsgrenze|حد المعاملة
transaktionsbeginn|بدء المعاملة
transaktionsende|نهاية المعاملة
transaktionsabbruch|إلغاء المعاملة
transaktionsbestätigung|تثبيت المعاملة
rücksetzpunkt|نقطة تراجع داخل المعاملة
isolationsstufe|مستوى العزل
schmutziges lesen|قراءة بيانات غير مثبتة
nichtwiederholbares lesen|قراءة غير قابلة للتكرار
phantomlesen|قراءة صفوف وهمية
serialisierbarkeit|قابلية التنفيذ التسلسلي
sperrobjekt|كائن القفل
sperrgranularität|درجة تفصيل القفل
zeilensperre|قفل صف
seitensperre|قفل صفحة
tabellensperre|قفل جدول
lesesperre|قفل قراءة مشترك
schreibsperre|قفل كتابة حصري
sperreskalation|تصعيد نطاق القفل
verklemmung|تعطل متبادل بسبب الأقفال
verklemmungserkennung|اكتشاف التعطل المتبادل
wartegraph|رسم انتظار الأقفال
optimistische sperrung|قفل متفائل
pessimistische sperrung|قفل متشائم
parallelitätskontrolle|التحكم في التزامن
mehrbenutzerbetrieb|تشغيل متعدد المستخدمين
datensatzsperre|قفل سجل
transaktionswiederherstellung|استعادة المعاملات
protokollbasierte wiederherstellung|استعادة قائمة على السجل
prüfpunkt der datenbank|نقطة تحقق لقاعدة البيانات
datenbankreplikation|نسخ قاعدة البيانات
primärreplik|نسخة أساسية
sekundärreplik|نسخة ثانوية
synchrone replikation|نسخ متزامن
asynchrone replikation|نسخ غير متزامن
replikationsverzögerung|تأخير النسخ المتماثل
lesereplik|نسخة مخصصة للقراءة
datenbankspiegelung|مرآة قاعدة البيانات
datenbankcluster|عنقود قاعدة بيانات
horizontal partitionieren|تقسيم أفقي للبيانات
vertikal partitionieren|تقسيم رأسي للبيانات
sharding|توزيع البيانات على أجزاء مستقلة
verteilungsschlüssel|مفتاح التوزيع
datenbankmigration|ترحيل قاعدة البيانات
schemamigration|ترحيل المخطط
datenkonvertierung|تحويل البيانات
datenabgleich|مطابقة البيانات
dublettenerkennung|اكتشاف السجلات المكررة
dublettenbereinigung|تنظيف السجلات المكررة
vollständigkeitsprüfung|فحص الاكتمال
plausibilitätsprüfung|فحص المعقولية
wertebereichsprüfung|فحص نطاق القيم
formatprüfung|فحص التنسيق
referenzprüfung|فحص المراجع
programmlogik|منطق البرنامج
programmstruktur|بنية البرنامج
programmzustand|حالة البرنامج
programmstart|بدء البرنامج
programmende|نهاية البرنامج
programmausgabe|مخرجات البرنامج
programmeingabe|مدخلات البرنامج
programmschleife|حلقة البرنامج
programmverzweigung|تفرع البرنامج
programmmodul|وحدة برمجية
modulgrenze|حد الوحدة البرمجية
modulschnittstelle|واجهة الوحدة البرمجية
funktionsdefinition|تعريف الدالة
funktionsdeklaration|تصريح الدالة
funktionskörper|جسم الدالة
funktionsname|اسم الدالة
funktionssignatur|توقيع الدالة
funktionsparameter|معامل الدالة
formaler parameter|معامل شكلي
aktueller parameter|معامل فعلي
wertübergabe|تمرير بالقيمة
referenzübergabe|تمرير بالمرجع
parameterliste|قائمة المعاملات
parameterreihenfolge|ترتيب المعاملات
parametertyp|نوع المعامل
standardparameter|معامل افتراضي
rückgabetyp|نوع القيمة المعادة
rückgabeanweisung|تعليمة الإرجاع
rückgabestelle|موضع الإرجاع
methodendefinition|تعريف الطريقة
methodensignatur|توقيع الطريقة
methodenparameter|معامل الطريقة
methodenkörper|جسم الطريقة
methodenüberschreibung|إعادة تعريف الطريقة
methodenbindung|ربط استدعاء الطريقة
statische bindung|ربط ثابت
dynamische bindung|ربط ديناميكي
späte bindung|ربط متأخر
polymorphie|تعدد الأشكال
überschreiben|يعيد تعريف طريقة موروثة
überladen|يحمّل الاسم بعدة تواقيع
klassenentwurf|تصميم الصنف
klassendefinition|تعريف الصنف
klassenname|اسم الصنف
klassenattribut|سمة صنفية
klassenmethode|طريقة صنفية
instanzmethode|طريقة كائن
instanzattribut|سمة كائن
objektreferenz|مرجع كائن
referenzvariable|متغير مرجعي
objektzustand|حالة الكائن
objektverhalten|سلوك الكائن
objektidentität|هوية الكائن
objektlebenszyklus|دورة حياة الكائن
objektinitialisierung|تهيئة الكائن
objektzerstörung|إنهاء الكائن وتحرير موارده
konstruktor|مُنشئ الكائن
standardkonstruktor|المُنشئ الافتراضي
parametrisierter konstruktor|مُنشئ ذو معاملات
konstruktoraufruf|استدعاء المُنشئ
vererbung|وراثة برمجية
basisklasse|صنف أساسي
oberklasse|صنف أعلى
unterklasse|صنف فرعي
abgeleitete klasse|صنف مشتق
mehrfachvererbung|وراثة متعددة
vererbungsbeziehung|علاقة وراثة
ist-eine-beziehung|علاقة «هو نوع من»
hat-eine-beziehung|علاقة «يمتلك»
komposition|تركيب قوي بين الكائنات
aggregation|تجميع بين الكائنات
assoziation|ارتباط بين الكائنات
abhängigkeitsbeziehung|علاقة تبعية
sichtbarkeit|نطاق الرؤية
zugriffsmodifikator|محدد الوصول
öffentliche sichtbarkeit|رؤية عامة
private sichtbarkeit|رؤية خاصة
geschützte sichtbarkeit|رؤية محمية
paketsichtbarkeit|رؤية ضمن الحزمة
datenabstraktion|تجريد البيانات
implementierungsdetail|تفصيل تنفيذي
schnittstellendefinition|تعريف الواجهة البرمجية
schnittstellenmethode|طريقة واجهة
schnittstellenvertrag|عقد الواجهة البرمجية
standardmethode|طريقة افتراضية في الواجهة
abstrakte methode|طريقة مجردة
konkrete klasse|صنف ملموس
instanziierung|إنشاء نسخة كائن
instanziierbar|قابل لإنشاء كائنات منه
generische klasse|صنف عام بمعامل نوع
typparameter|معامل نوع
typbeschränkung|قيد نوع
wildcard-typ|نوع بدل عام
rohdatentyp|نوع عام دون معامل
aufzählungstyp|نوع تعدادي
konstantendefinition|تعريف ثابت
unveränderliches objekt|كائن غير قابل للتغيير
veränderliches objekt|كائن قابل للتغيير
primitive datentypen|أنواع بيانات بدائية
ganzzahliger datentyp|نوع عدد صحيح
gleitkommatyp|نوع عدد عشري عائم
zeichenorientierter datentyp|نوع محرف
wahrheitswert|قيمة منطقية
wertebereich|نطاق القيم
typkompatibilität|توافق الأنواع
implizite typumwandlung|تحويل نوع ضمني
explizite typumwandlung|تحويل نوع صريح
typprüfung|فحص النوع
laufzeittyp|نوع وقت التشغيل
feldvariable|متغير عضو
lokale variable|متغير محلي
klassenkonstante|ثابت صنفي
initialwert|قيمة ابتدائية
standardinitialisierung|تهيئة افتراضية
definite zuweisung|إسناد مؤكد قبل الاستخدام
arithmetischer operator|معامل حسابي
vergleichsoperator|معامل مقارنة
logischer operator|معامل منطقي
zuweisungsoperator|معامل إسناد
inkrementoperator|معامل زيادة
dekrementoperator|معامل إنقاص
operatorrangfolge|أولوية المعاملات
auswertungsreihenfolge|ترتيب التقييم
kurzschlussauswertung|تقييم منطقي مختصر
bedingter ausdruck|تعبير شرطي
auswahlanweisung|تعليمة اختيار
fallunterscheidung|تمييز الحالات
mehrfachauswahl|اختيار متعدد الفروع
schleifenkopf|رأس الحلقة
schleifenrumpf|جسم الحلقة
schleifenzähler|عداد الحلقة
zählergesteuerte schleife|حلقة يتحكم بها عداد
kopfgesteuerte schleife|حلقة يُفحص شرطها أولًا
fußgesteuerte schleife|حلقة يُفحص شرطها بعد التنفيذ
schleifenabbruch|إنهاء الحلقة
schleifenfortsetzung|متابعة الدورة التالية للحلقة
verschachtelte schleife|حلقة متداخلة
rekursion|استدعاء ذاتي
rekursionsanker|حالة توقف الاستدعاء الذاتي
rekursionstiefe|عمق الاستدعاء الذاتي
aufrufstapel|مكدس الاستدعاءات
stapelrahmen|إطار المكدس
speicherbereinigung|جمع الذاكرة غير المستخدمة
speicherleck|تسرب الذاكرة
nullreferenz|مرجع فارغ
nullzeigerausnahme|استثناء مرجع فارغ
ausnahmeklasse|فئة الاستثناء
ausnahmeobjekt|كائن الاستثناء
ausnahmeauslösung|إطلاق الاستثناء
ausnahmeweitergabe|تمرير الاستثناء للأعلى
ausnahmebehandler|معالج الاستثناء
abfangblock|كتلة التقاط الاستثناء
aufräumblock|كتلة التنظيف النهائية
geprüfte ausnahme|استثناء يجب التصريح أو المعالجة عنه
ungeprüfte ausnahme|استثناء وقت تشغيل غير مفروض التصريح به
benutzerdefinierte ausnahme|استثناء يعرّفه المبرمج
fehlerstapel|تتبّع مكدس الخطأ
fehlersuche im programm|تصحيح أخطاء البرنامج
haltepunkt|نقطة توقف
schrittweise ausführung|تنفيذ خطوة بخطوة
variableninspektion|فحص قيم المتغيرات
testtreiber|برنامج مساعد لتشغيل الاختبار
testdoppel|بديل اختباري لكائن حقيقي
attrappe|كائن اختباري بسيط
simulationsobjekt|كائن محاكاة للاختبار
erwartungswert|القيمة المتوقعة
tatsächlicher wert|القيمة الفعلية
testvoraussetzung|شرط مسبق للاختبار
testnachbedingung|حالة متوقعة بعد الاختبار
positiver testfall|حالة اختبار إيجابية
negativer testfall|حالة اختبار سلبية
grenzfall|حالة حدية
äquivalenzklasse|فئة تكافؤ للاختبار
entscheidungsüberdeckung|تغطية القرارات
zweigüberdeckung|تغطية الفروع
anweisungsüberdeckung|تغطية التعليمات
cloudbereitstellung|توفير الموارد السحابية
cloudressource|مورد سحابي
cloudumgebung|بيئة سحابية
cloudplattform|منصة سحابية
cloudanbieter|مزود سحابي
cloudkonto|حساب سحابي
cloudmandant|مستأجر سحابي
mandantenverwaltung|إدارة المستأجرين
mandantenisolation|عزل المستأجرين
mehrmandantenbetrieb|تشغيل متعدد المستأجرين
einzelmandantenbetrieb|تشغيل لمستأجر واحد
ressourcenisolierung|عزل الموارد
ressourcenbegrenzung|تحديد الموارد
ressourcenquote|حصة الموارد
ressourcengruppe|مجموعة موارد
bereitstellungsvorlage|قالب نشر الموارد
infrastrukturcode|تعريف البنية التحتية كتعليمات
deklarative konfiguration|إعداد وصفي للحالة المطلوبة
imperative konfiguration|إعداد قائم على أوامر تنفيذية
zustandsverwaltung|إدارة الحالة
gewünschter zustand|الحالة المطلوبة
konfigurationsdrift|انحراف الإعداد عن الحالة المطلوبة
automatisierungsablauf|سير أتمتة
automatisierungsauftrag|مهمة أتمتة
automatisierungsskript|برنامج نصي للأتمتة
automatisierungsplattform|منصة أتمتة
orchestrierungsplattform|منصة تنسيق
orchestrierungsablauf|سير التنسيق
containerverwaltung|إدارة الحاويات
containerregistrierung|سجل صور الحاويات
containerimage|صورة حاوية
imageversion|إصدار الصورة
imageebene|طبقة صورة الحاوية
containerstart|بدء الحاوية
containerstopp|إيقاف الحاوية
containerneustart|إعادة تشغيل الحاوية
containerzustand|حالة الحاوية
containerprotokoll|سجل الحاوية
containerport|منفذ الحاوية
containernetzwerk|شبكة الحاويات
containerressource|مورد الحاوية
containergrenze|حد موارد الحاوية
containerpersistenz|استمرارية بيانات الحاوية
persistentes volumen|وحدة تخزين دائمة
volumenbindung|ربط وحدة التخزين
dienstentdeckung|اكتشاف الخدمات
dienstendpunkt|نقطة نهاية الخدمة
gesundheitsprüfung|فحص صحة الخدمة
bereitschaftsprüfung|فحص جاهزية الخدمة
lebenszeichenprüfung|فحص استمرار عمل الخدمة
replikanzahl|عدد النسخ العاملة
skalierungsregel|قاعدة التوسع
skalierungsschwelle|حد بدء التوسع
skalierungsereignis|حدث توسع
herauskalieren|زيادة عدد النسخ أفقيًا
hereinskalieren|تقليل عدد النسخ أفقيًا
hochskalieren|زيادة موارد النسخة رأسيًا
herunterskalieren|خفض موارد النسخة رأسيًا
elastizitätsregel|قاعدة المرونة
lastabhängige skalierung|توسع يعتمد على الحمل
zeitgesteuerte skalierung|توسع مجدول زمنيًا
kapazitätsreservierung|حجز السعة
reservierte instanz|نسخة سحابية محجوزة
bedarfsgesteuerte instanz|نسخة حسب الطلب
unterbrechbare instanz|نسخة قابلة للإيقاف من المزود
kostenüberwachung|مراقبة التكلفة
kostenwarnung|تنبيه تكلفة
kostenbudget|ميزانية تكلفة
ressourcenkennzeichnung|وسم الموارد
kostenzuordnung|إسناد التكاليف
nutzungsabrechnung|فوترة الاستخدام
verbrauchsabhängig|بحسب الاستهلاك
dienstebene|مستوى الخدمة
dienstebenenvereinbarung|اتفاقية مستوى الخدمة
dienstebenenkennzahl|مؤشر مستوى الخدمة
dienstebenenverletzung|انتهاك مستوى الخدمة
betriebsziel|هدف تشغيلي
verfügbarkeitsziel|هدف التوافر
fehlerbudget|ميزانية الأخطاء المسموح بها
in anspruch nehmen|يستفيد من / يستخدم
zur verfügung stellen|يوفّر / يضع تحت التصرف
in betrieb nehmen|يضعه قيد التشغيل
außer betrieb nehmen|يخرجه من الخدمة
einen fehler verursachen|يتسبب في خطأ
eine ursache feststellen|يتحقق من سبب
eine ursache ausschließen|يستبعد سببًا
maßnahmen ergreifen|يتخذ إجراءات
anforderungen erfüllen|يستوفي المتطلبات
voraussetzungen schaffen|يوفر الشروط اللازمة
rechte zuweisen|يسند الصلاحيات
zugriff gewähren|يمنح الوصول
zugriff einschränken|يقيّد الوصول
daten wiederherstellen|يستعيد البيانات
daten dauerhaft speichern|يحفظ البيانات بشكل دائم
änderungen nachvollziehen|يتتبع التغييرات ويفهمها
eine entscheidung begründen|يعلّل قرارًا
einen sachverhalt prüfen|يفحص وقائع مسألة
eine verbindung aufbauen|ينشئ اتصالًا
eine verbindung unterbrechen|يقطع اتصالًا
einen dienst neu starten|يعيد تشغيل خدمة
eine konfiguration überprüfen|يتحقق من إعداد
einen zustand überwachen|يراقب حالة
unter berücksichtigung von|مع مراعاة
im verhältnis zu|مقارنةً بـ / بالنسبة إلى
im gegensatz dazu|وعلى النقيض من ذلك
unter der voraussetzung dass|بشرط أن
sofern erforderlich|إذا لزم الأمر
soweit möglich|قدر الإمكان
grundsätzlich gilt|ينطبق من حيث المبدأ
daraus ergibt sich|ينتج عن ذلك
daraus folgt|يترتب على ذلك
dies setzt voraus|هذا يفترض / يشترط
dies führt dazu|هذا يؤدي إلى
dabei ist zu beachten|يجب مراعاة ما يلي
hierbei handelt es sich um|يتعلق الأمر هنا بـ
lässt sich feststellen|يمكن التحقق من أن
kommt nicht infrage|غير وارد / غير مناسب
kommt infrage|وارد / يمكن أخذه في الحسبان
welche aussage trifft am ehesten zu|أي عبارة هي الأقرب إلى الصواب؟
welche der folgenden aussagen ist korrekt|أي العبارات التالية صحيحة؟
welche aussage ist nicht zutreffend|أي عبارة غير صحيحة؟
welche maßnahme ist erforderlich|ما الإجراء الضروري؟
welche maßnahme wäre geeignet|ما الإجراء الذي سيكون مناسبًا؟
welche vorgehensweise ist zweckmäßig|ما طريقة الإجراء الملائمة للغرض؟
welcher sachverhalt liegt vor|ما الحالة القانونية أو الواقعية القائمة؟
welche folge ergibt sich daraus|ما النتيجة المترتبة على ذلك؟
welche auswirkung ist zu erwarten|ما الأثر المتوقع؟
welche voraussetzung ist notwendig|ما الشرط الضروري؟
was muss berücksichtigt werden|ما الذي يجب مراعاته؟
was ist hierbei besonders zu beachten|ما الذي يجب مراعاته بشكل خاص هنا؟
welcher zusammenhang besteht zwischen|ما العلاقة القائمة بين ...؟
welche aussage lässt sich daraus ableiten|أي عبارة يمكن استنتاجها من ذلك؟
welcher schritt sollte zuerst erfolgen|أي خطوة ينبغي تنفيذها أولًا؟
welche maßnahme verhindert|ما الإجراء الذي يمنع ...؟
welche maßnahme verbessert|ما الإجراء الذي يحسّن ...؟
welche aussage beschreibt den sachverhalt korrekt|أي عبارة تصف الحالة بصورة صحيحة؟
was trifft auf|ما الذي ينطبق على ...؟
was trifft nicht auf|ما الذي لا ينطبق على ...؟
welche antwort ist richtig|أي إجابة صحيحة؟
welche antwort ist falsch|أي إجابة خاطئة؟
welche antworten sind richtig|أي إجابات صحيحة؟
welche kombination ist korrekt|أي مجموعة صحيحة؟
welche reihenfolge ist korrekt|أي ترتيب صحيح؟
welche zuordnung trifft zu|أي إسناد صحيح؟
welcher begriff passt|أي مصطلح يناسب؟
welche eigenschaft kennzeichnet|ما الخاصية التي تميّز ...؟
welches merkmal beschreibt|أي سمة تصف ...؟
welcher vorteil ergibt sich|ما الميزة الناتجة؟
welcher nachteil entsteht|ما العيب الذي ينشأ؟
welches risiko besteht|ما الخطر القائم؟
welche gefahr droht|ما الخطر المحتمل؟
welche bedingung gilt|ما الشرط الساري؟
welche regelung greift|أي حكم ينطبق؟
welche verpflichtung besteht|ما الالتزام القائم؟
welcher anspruch besteht|ما الحق القائم؟
welche frist ist einzuhalten|ما المهلة الواجب الالتزام بها؟
welcher betrag ist zu zahlen|ما المبلغ الواجب دفعه؟
welcher wert ist einzutragen|ما القيمة الواجب إدخالها؟
welches ergebnis ist korrekt|أي نتيجة صحيحة؟
wie hoch ist|كم يبلغ ...؟
wie viele werden benötigt|كم عدد المطلوب؟
wie lange dauert|كم يستغرق ...؟
worauf ist zu achten|ما الذي ينبغي الانتباه إليه؟
was ist der nächste schritt|ما الخطوة التالية؟
was geschieht anschließend|ماذا يحدث بعد ذلك؟
was ist die ursache|ما السبب؟
was ist die folge|ما النتيجة؟
was ist der zweck|ما الغرض؟
was ist das ziel|ما الهدف؟
was ist der unterschied zwischen|ما الفرق بين ...؟
was haben beide gemeinsam|ما القاسم المشترك بينهما؟
in welcher hinsicht|من أي ناحية؟
unter welchen voraussetzungen|تحت أي شروط؟
in welchem fall|في أي حالة؟
zu welchem zeitpunkt|في أي وقت؟
in welcher phase|في أي مرحلة؟
an welcher stelle|في أي موضع؟
aus welchen bestandteilen|من أي مكونات؟
auf welcher grundlage|على أي أساس؟
mit welcher begründung|بأي تعليل؟
mit welchem verfahren|بأي إجراء؟
mit welchen maßnahmen|بأي إجراءات؟
anhand des beispiels|بالاستناد إلى المثال
anhand der angaben|بالاستناد إلى المعطيات
unter beachtung der vorgaben|مع مراعاة التعليمات
unter einhaltung der frist|مع الالتزام بالمهلة
unter einhaltung der richtlinie|مع الالتزام بالسياسة
unter einhaltung der anforderungen|مع الالتزام بالمتطلبات
gemäß der vereinbarung|وفقًا للاتفاق
gemäß den vorgaben|وفقًا للتعليمات
entsprechend der anforderung|وفقًا للمتطلب
entsprechend den bestimmungen|وفقًا للأحكام
nach geltendem recht|وفق القانون الساري
nach aktuellem kenntnisstand|وفق المعرفة الحالية
nach erfolgreicher prüfung|بعد نجاح الفحص
nach vorheriger prüfung|بعد فحص مسبق
vor der inbetriebnahme|قبل بدء التشغيل
nach der inbetriebnahme|بعد بدء التشغيل
während des betriebs|أثناء التشغيل
im laufenden betrieb|أثناء التشغيل الفعلي
im störungsfall|في حالة العطل
im ausfallfall|في حالة التعطل
im notfall|في حالة الطوارئ
im verdachtsfall|عند الاشتباه
im einzelfall|في الحالة الفردية
im regelfall|في الحالة المعتادة
im ausnahmefall|في الحالة الاستثنائية
im folgenden beispiel|في المثال التالي
im vorliegenden fall|في الحالة المعروضة
im genannten zeitraum|في الفترة المذكورة
innerhalb eines zeitraums|ضمن فترة زمنية
innerhalb der vorgegebenen zeit|ضمن الوقت المحدد
bis zum angegebenen termin|حتى الموعد المحدد
mit beginn der frist|مع بدء المهلة
mit ablauf der frist|بانقضاء المهلة
ohne unnötige verzögerung|دون تأخير غير ضروري
so schnell wie möglich|بأسرع ما يمكن
so früh wie möglich|في أقرب وقت ممكن
so spät wie nötig|متأخرًا بقدر الضرورة فقط
vollständig und nachvollziehbar|بشكل كامل وقابل للتتبع
korrekt und vollständig|صحيح وكامل
sicher und zuverlässig|آمن وموثوق
dauerhaft und revisionssicher|دائم وقابل للتدقيق دون تلاعب
eindeutig und widerspruchsfrei|واضح وخالٍ من التناقض
angemessen und verhältnismäßig|مناسب ومتناسب
geeignet und erforderlich|ملائم وضروري
wirksam und wirtschaftlich|فعال واقتصادي
technisch und organisatorisch|تقنيًا وتنظيميًا
rechtlich und wirtschaftlich|قانونيًا واقتصاديًا
regelmäßig und anlassbezogen|دوريًا وعند وجود سبب
unverzüglich melden|يبلغ دون تأخير
fristgerecht beantragen|يقدم الطلب ضمن المهلة
ordnungsgemäß dokumentieren|يوثق على نحو سليم
vollständig erfassen|يسجل بصورة كاملة
eindeutig kennzeichnen|يميّز بوضوح
sicher aufbewahren|يحفظ بأمان
vertraulich behandeln|يتعامل معه بسرية
vor unbefugtem zugriff schützen|يحمي من الوصول غير المصرح به
auf das notwendige maß beschränken|يقيّد بالقدر الضروري
regelmäßig aktualisieren|يحدّث بانتظام
fortlaufend überwachen|يراقب باستمرار
automatisch erkennen|يكتشف تلقائيًا
manuell bestätigen|يؤكد يدويًا
zentral verwalten|يدير مركزيًا
dezentral bereitstellen|يوفّر بصورة لامركزية
dauerhaft gewährleisten|يضمن بصورة دائمة
vorübergehend deaktivieren|يعطّل مؤقتًا
endgültig löschen|يحذف نهائيًا
sicher entsorgen|يتخلص منه بأمان
ordnungsgemäß außer betrieb nehmen|يخرجه من الخدمة على نحو سليم
gegen ausfall absichern|يؤمّن ضد التعطل
gegen manipulation schützen|يحمي من التلاعب
gegen unbefugten zugriff absichern|يؤمّن ضد الوصول غير المصرح به
eine sicherung erstellen|ينشئ نسخة احتياطية
eine sicherung überprüfen|يتحقق من النسخة الاحتياطية
eine sicherung wiederherstellen|يستعيد نسخة احتياطية
eine wiederherstellung testen|يختبر الاستعادة
einen wiederanlauf durchführen|ينفذ إعادة التشغيل بعد العطل
den betrieb wieder aufnehmen|يستأنف التشغيل
einen dienst unterbrechen|يقطع خدمة
einen dienst überwachen|يراقب خدمة
einen prozess beenden|ينهي عملية
einen prozess priorisieren|يرتب عملية حسب الأولوية
eine meldung protokollieren|يسجل رسالة في السجل
ein ereignis auswerten|يحلل حدثًا
einen schwellenwert überschreiten|يتجاوز قيمة حدية
einen alarm auslösen|يُطلق إنذارًا
eine störung melden|يبلغ عن عطل
eine störung dokumentieren|يوثق عطلًا
eine störung eskalieren|يصعّد عطلًا
eine lösung umsetzen|ينفذ حلًا
die funktion wiederherstellen|يستعيد الوظيفة
die ursache dokumentieren|يوثق السبب
den lösungsweg beschreiben|يصف مسار الحل
die auswirkung bewerten|يقيّم الأثر
das risiko einschätzen|يقدّر الخطر
das risiko mindern|يخفض الخطر
das risiko akzeptieren|يقبل الخطر
eine schwachstelle beheben|يعالج ثغرة
eine bedrohung erkennen|يكتشف تهديدًا
einen angriff abwehren|يصد هجومًا
einen vorfall untersuchen|يحقق في حادث
spuren sichern|يحفظ الأدلة الرقمية
zugriffe protokollieren|يسجل عمليات الوصول
berechtigungen regelmäßig prüfen|يراجع الصلاحيات بانتظام
berechtigungen bedarfsgerecht vergeben|يمنح الصلاحيات وفق الحاجة
ein konto sperren|يقفل حسابًا
ein konto entsperren|يلغي قفل حساب
ein kennwort zurücksetzen|يعيد تعيين كلمة مرور
die identität bestätigen|يؤكد الهوية
eine sitzung beenden|ينهي جلسة
eine richtlinie anwenden|يطبق سياسة
eine richtlinie durchsetzen|يفرض سياسة
eine ausnahme genehmigen|يوافق على استثناء
eine änderung freigeben|يوافق على تغيير
eine konfiguration sichern|ينسخ الإعداد احتياطيًا
eine konfiguration wiederherstellen|يستعيد الإعداد
eine abweichung feststellen|يكتشف انحرافًا
den soll-zustand herstellen|يحقق الحالة المستهدفة
ressourcen bedarfsgerecht zuweisen|يخصص الموارد وفق الحاجة
die kapazität erweitern|يزيد السعة
die auslastung überwachen|يراقب الاستخدام
einen engpass beseitigen|يزيل عنق الزجاجة
die leistung messen|يقيس الأداء
die verfügbarkeit berechnen|يحسب التوافر
eine route auswählen|يختار مسارًا
ein paket weiterleiten|يعيد توجيه حزمة
eine adresse auflösen|يحوّل الاسم إلى عنوان
eine adresse zuweisen|يسند عنوانًا
ein subnetz berechnen|يحسب شبكة فرعية
ein netzwerk segmentieren|يقسّم الشبكة إلى مقاطع
den datenverkehr filtern|يرشح حركة البيانات
eine firewallregel erstellen|ينشئ قاعدة جدار ناري
eine verbindung zulassen|يسمح باتصال
eine verbindung blockieren|يحظر اتصالًا
einen tunnel aufbauen|ينشئ نفقًا
eine verbindung verschlüsseln|يشفّر اتصالًا
ein zertifikat prüfen|يتحقق من شهادة
ein zertifikat widerrufen|يلغي شهادة
einen schlüssel erzeugen|يولّد مفتاحًا
einen schlüssel austauschen|يتبادل مفتاحًا
daten verschlüsselt übertragen|ينقل البيانات بصورة مشفرة
daten konsistent halten|يحافظ على اتساق البيانات
eine transaktion bestätigen|يثبت معاملة
eine transaktion zurücksetzen|يتراجع عن معاملة
eine abfrage optimieren|يحسن استعلامًا
einen index erstellen|ينشئ فهرسًا
referenzielle integrität gewährleisten|يضمن السلامة المرجعية
einen datensatz sperren|يقفل سجلًا
ein schema ändern|يغير مخطط قاعدة البيانات
daten vollständig migrieren|يرحّل البيانات بالكامل
eingaben validieren|يتحقق من صحة المدخلات
eine ausnahme behandeln|يعالج استثناءً
eine methode überschreiben|يعيد تعريف طريقة موروثة
eine schnittstelle implementieren|ينفذ واجهة برمجية
ein objekt erzeugen|ينشئ كائنًا
einen testfall ausführen|ينفذ حالة اختبار
ein ergebnis vergleichen|يقارن نتيجة
einen grenzfall prüfen|يفحص حالة حدية
einen haltepunkt setzen|يضع نقطة توقف
die ausführung fortsetzen|يتابع التنفيذ
eine instanz bereitstellen|يوفّر نسخة تشغيل
eine instanz skalieren|يوسع موارد نسخة تشغيل
ressourcen automatisch skalieren|يوسع الموارد تلقائيًا
eine containerinstanz starten|يشغّل نسخة حاوية
einen container neu starten|يعيد تشغيل حاوية
den zustand abgleichen|يطابق الحالة
eine bereitstellung automatisieren|يؤتمت النشر
kosten transparent zuordnen|يسند التكاليف بشفافية
die dienstgüte überwachen|يراقب جودة الخدمة
krisensituation|حالة أزمة
botschaft|رسالة / سفارة حسب السياق
präsentation|عرض تقديمي
betreuung|رعاية / إشراف
entsorgung|تخلّص آمن
serverkonfiguration|إعداد الخادم
konnektivität|قابلية الاتصال
ausstattung|تجهيزات
marktsituation|وضع السوق
einbindung|دمج / ربط
verschmutzung|تلوث
herstellung|إنتاج / إنشاء
erweiterbarkeit|قابلية التوسعة
entladestation|محطة تفريغ
reduktion|خفض
arbeitsplanung|تخطيط العمل
kundendaten|بيانات العملاء
ticketsystem|نظام التذاكر
problembeschreibung|وصف المشكلة
stromkosten|تكاليف الكهرباء
verkabelung|تمديد الكابلات
kostenersparnis|توفير في التكاليف
aufbewahrung|احتفاظ / حفظ
kundenzufriedenheit|رضا العملاء
eingabeaufforderung|موجّه إدخال الأوامر
kompromittierung|اختراق أمني
gültigkeit|صلاحية
verkleinerung|تصغير
unabhängigkeit|استقلالية
verbindungssicherheit|أمان الاتصال
eskalation|تصعيد
ausgangszustand|الحالة الابتدائية
gesamtwiderstand|المقاومة الكلية
zentraleinheit|وحدة المعالجة المركزية
entladung|تفريغ الشحنة
operation|عملية
preissenkung|خفض السعر
mitgliedschaft|عضوية
abschottung|عزل محكم
geschäftsbetrieb|النشاط التشغيلي للمنشأة
vollendung|إتمام
schwangerschaft|حمل
besprechung|اجتماع مناقشة
anleitung|دليل إرشادي
tabellenkalkulation|جداول بيانات حسابية
patientendatenverarbeitung|معالجة بيانات المرضى
folienbereich|منطقة الشرائح
bitübertragung|نقل البتات
erneuerung|تجديد
kosteneinsparung|خفض التكاليف
steigerung|زيادة
gestaltung|تصميم / صياغة
projektinitiierung|بدء المشروع
identifikation|تحديد الهوية
dienstvertrag|عقد خدمات
werkvertrag|عقد لإنجاز عمل محدد
modernisierung|تحديث شامل
verladestation|محطة تحميل
bezugskosten|تكاليف الشراء الإضافية
leasingvertrag|عقد تأجير تمويلي
entscheidungsfindung|اتخاذ القرار
kundenbetreuung|خدمة العملاء
servicequalität|جودة الخدمة
preisgestaltung|تسعير
arbeitsstelle|وظيفة / مكان عمل
geheimhaltung|حفظ السرية
erledigung|إنجاز
softwareentwicklungsabteilung|قسم تطوير البرمجيات
entwicklungsabteilung|قسم التطوير
rechnungsprüfung|مراجعة الفاتورة
deduplizierung|إزالة تكرار البيانات
originaldaten|البيانات الأصلية
sicherstellung|ضمان / تأمين
bildauflösung|دقة الصورة
videoüberwachung|مراقبة بالفيديو
bildqualität|جودة الصورة
betriebssystemhärtung|تقوية نظام التشغيل أمنيًا
untersuchung|فحص / تحقيق
programmerweiterung|توسعة البرنامج
ausgangswert|القيمة الابتدائية
unternehmensdaten|بيانات المنشأة
gesamtleistung|إجمالي القدرة أو الأداء
langzeitarchivierung|أرشفة طويلة الأمد
manipulation|تلاعب
offenlegung|إفصاح
filterung|ترشيح
datenaufbereitung|تهيئة البيانات
speicherreduzierung|خفض مساحة التخزين
übertragungsfehler|خطأ نقل
netzwerktrennung|فصل الشبكة
vertragsgestaltung|صياغة العقد
pflichtverletzung|إخلال بالواجب
anspruchsvoraussetzung|شرط الاستحقاق
rechtsfolge|أثر قانوني
tatbestand|واقعة قانونية منشئة للحكم
beweisführung|إقامة الدليل
interessenabwägung|موازنة المصالح
verhältnismäßigkeitsprüfung|فحص التناسب
gleichbehandlungsgrundsatz|مبدأ المساواة في المعاملة
kündigungsgrund|سبب الإنهاء
kündigungserklärung|إشعار إنهاء العقد
kündigungszugang|وصول إشعار الإنهاء
sozialauswahl|اختيار اجتماعي عند الفصل التشغيلي
weiterbeschäftigung|استمرار التوظيف
arbeitsbefreiung|إعفاء من أداء العمل
berufsschulpflicht|إلزام حضور المدرسة المهنية
ausbildereignung|أهلية المدرب المهني
ausbildungszeugnis|شهادة التدريب المهني
abschlusszeugnis|شهادة التخرج
zwischenprüfung|امتحان مرحلي
prüfungsvoraussetzung|شرط دخول الامتحان
prüfungszulassung|قبول دخول الامتحان
wiederholungsprüfung|امتحان إعادة
prüfungsleistung|أداء امتحاني
notenschlüssel|مفتاح توزيع الدرجات
semantikfehler|خطأ دلالي في البرنامج
datenarchivierung|أرشفة البيانات
sprachqualität|جودة اللغة
rechenzeit|زمن المعالجة الحسابية
akkulaufzeit|مدة تشغيل البطارية
marketingabteilung|قسم التسويق
kodierung|ترميز
einzelwiderstand|مقاومة منفردة
rechenergebnis|نتيجة الحساب
stellenwertsystem|نظام القيمة المكانية
stellenwert|قيمة الخانة
druckverfahren|طريقة الطباعة
spannungsfreiheit|انعدام الجهد الكهربائي
restspannung|جهد متبقٍ
quellenrundung|التقريب في المصدر
akkukapazität|سعة البطارية
quellenabbildung|صورة المصدر
typkonvertierung|تحويل نوع البيانات
prozentrechnung|حساب النسب المئوية
tippfehler|خطأ مطبعي
unterweisung|إحاطة وتعليمات مهنية
preisniveaustabilität|استقرار المستوى العام للأسعار
gleichberechtigung|المساواة في الحقوق
unternehmensgründung|تأسيس منشأة
mitarbeiterbeteiligung|مشاركة الموظفين
pausenregelung|تنظيم فترات الاستراحة
grippeerkrankung|الإصابة بالإنفلونزا
bevölkerung|السكان
interessengemeinschaft|تجمع مصالح مشترك
entbindung|ولادة / إعفاء من التزام حسب السياق
staatsangehörigkeit|الجنسية
gewinnmaximierung|تعظيم الربح
abteilungssystem|نظام تنظيمي قائم على الأقسام
subventionierung|تقديم إعانات
gehaltstarifvertrag|اتفاقية جماعية للرواتب
handhabung|طريقة الاستخدام والتعامل
abfallvermeidung|تجنب النفايات
ausbildungszeit|وقت التدريب المهني
brandschutz|الوقاية من الحريق
`.trim().split('\n')

export const dictionaryExpansionSecond: Record<string, string> = Object.freeze(
  Object.fromEntries(rows.map((row) => {
    const separator = row.indexOf('|')
    if (separator <= 0 || separator === row.length - 1) throw new Error(`Malformed second dictionary row: ${row}`)
    return [row.slice(0, separator), row.slice(separator + 1)]
  })),
)
