/**
 * High-value German → Modern Standard Arabic vocabulary gathered from the
 * learning corpus. Parsed once when the module is loaded; hover lookup still
 * uses the merged Record in dictionary.ts and never rebuilds this data.
 */
const rows = `
voraussetzung|متطلب مسبق
voraussetzungen|متطلبات مسبقة
zuständigkeit|اختصاص / مسؤولية
zuständigkeiten|اختصاصات / مسؤوليات
berechtigung|صلاحية / إذن وصول
berechtigungen|صلاحيات / أذونات وصول
nachvollziehbarkeit|إمكانية التتبع والفهم
verfügbarkeit|التوافر
verbindlichkeit|الإلزامية
beeinträchtigung|تأثير سلبي / إعاقة
beeinträchtigungen|تأثيرات سلبية
gewährleistung|الضمان القانوني
vertraulichkeit|السرية
zuverlässigkeit|الموثوقية
erreichbarkeit|إمكانية الوصول
beschaffenheit|الخصائص / الحالة
auswirkung|أثر / نتيجة
auswirkungen|آثار / نتائج
vorgehensweise|طريقة الإجراء
vorgehensweisen|طرائق الإجراء
sachverhalt|وقائع المسألة
sachverhalte|وقائع / حالات
rahmenbedingung|شرط إطاري
rahmenbedingungen|الشروط الإطارية
abweichung|انحراف / اختلاف
abweichungen|انحرافات / اختلافات
auswertung|تقييم / تحليل النتائج
auswertungen|تقييمات / تحليلات
überprüfung|مراجعة / تحقق
wiederherstellung|استعادة
absicherung|تأمين / حماية
freigabe|موافقة / إتاحة
freigaben|موافقات / إتاحات
zuordnung|إسناد / ربط
zuordnungen|إسنادات / روابط
bereitstellung|توفير / إتاحة
verarbeitung|معالجة
übertragung|نقل
ausführung|تنفيذ
einschränkung|قيد / تقييد
einschränkungen|قيود
vereinbarung|اتفاق
vereinbarungen|اتفاقات
verpflichtung|التزام
verpflichtungen|التزامات
einhaltung|امتثال / التزام
einwilligung|موافقة صريحة
zustimmung|موافقة
genehmigung|ترخيص / موافقة
genehmigungen|تراخيص / موافقات
anforderungsanalyse|تحليل المتطلبات
anforderungskatalog|قائمة المتطلبات
anforderungsprofil|ملف المتطلبات
entscheidungskriterium|معيار القرار
entscheidungskriterien|معايير القرار
beurteilung|تقييم / تقدير
bewertung|تقييم
bewertungsverfahren|إجراء التقييم
vergleichbarkeit|قابلية المقارنة
zweckmäßigkeit|الملاءمة للغرض
verhältnismäßigkeit|التناسب
notwendigkeit|الضرورة
dringlichkeit|الاستعجال
wirksamkeit|الفعالية
wirtschaftlichkeit|الجدوى الاقتصادية
leistungsfähigkeit|القدرة على الأداء
leistungsumfang|نطاق الأداء
leistungsmerkmal|خاصية أداء
leistungsmerkmale|خصائص الأداء
leistungsanforderung|متطلب أداء
qualitätsanforderung|متطلب جودة
sicherheitsanforderung|متطلب أمني
mindestanforderung|حد أدنى من المتطلبات
randbedingung|شرط جانبي
ausgangssituation|الوضع الابتدائي
ist-zustand|الوضع الحالي
soll-zustand|الوضع المستهدف
zielsetzung|تحديد الهدف
problemstellung|صياغة المشكلة
aufgabenstellung|نص المهمة / المطلوب
lösungsansatz|نهج الحل
lösungsvorschlag|مقترح حل
handlungsbedarf|الحاجة إلى اتخاذ إجراء
maßnahmenkatalog|قائمة الإجراءات
folgeabschätzung|تقدير العواقب
risikobewertung|تقييم المخاطر
risikoanalyse|تحليل المخاطر
schadensausmaß|حجم الضرر
eintrittswahrscheinlichkeit|احتمال الحدوث
restiko|الخطر المتبقي
restrisiko|الخطر المتبقي
schwachstellenanalyse|تحليل نقاط الضعف
ursachenanalyse|تحليل الأسباب
fehlerauswirkung|أثر الخطأ
fehlerbeschreibung|وصف الخطأ
fehlerbild|نمط العطل
fehlerquelle|مصدر الخطأ
störungsursache|سبب العطل
störungsmeldung|بلاغ عطل
störungsbehebung|معالجة العطل
problembehandlung|معالجة المشكلة
behebungsmaßnahme|إجراء الإصلاح
abstellmaßnahme|إجراء إزالة السبب
gegenmaßnahme|إجراء مضاد
vorbeugungsmaßnahme|إجراء وقائي
korrekturmaßnahme|إجراء تصحيحي
eskalationsstufe|مستوى التصعيد
eskalationsweg|مسار التصعيد
bearbeitungsstand|حالة المعالجة
bearbeitungszeit|مدة المعالجة
reaktionszeit|زمن الاستجابة
wiederanlaufzeit|زمن إعادة التشغيل
ausfallzeit|مدة التوقف
betriebsunterbrechung|انقطاع التشغيل
betriebsbereitschaft|الجاهزية التشغيلية
funktionsfähigkeit|القدرة الوظيفية
ordnungsgemäß|على نحو سليم / نظامي
ordnungsgemäße|سليمة / نظامية
ordnungsgemäßen|السليم / النظامي
zweckentsprechend|ملائم للغرض
bedarfsgerecht|وفق الحاجة
anforderungsgerecht|مطابق للمتطلبات
regelkonform|متوافق مع القواعد
rechtskonform|متوافق مع القانون
datenschutzkonform|متوافق مع حماية البيانات
nachvollziehbar|قابل للتتبع والفهم
zuverlässig|موثوق
verfügbar|متاح
vertraulich|سري
geeignet|ملائم
zuständig|مختص / مسؤول
erforderlich|مطلوب / ضروري
zulässig|مسموح قانونًا
unzulässig|غير مسموح
unabhängig|مستقل
verbindlich|ملزم
vorhanden|موجود
betroffen|متأثر / معني
relevant|ذو صلة
notwendig|ضروري
entsprechend|وفقًا لـ / مناسب
unterschiedlich|مختلف
vergleichbar|قابل للمقارنة
vollständig|كامل
fehlerhaft|معيب / خاطئ
dauerhaft|دائم
vorübergehend|مؤقت
gleichzeitig|في الوقت نفسه
gegenseitig|متبادل
einheitlich|موحّد
eindeutig|واضح لا لبس فيه
mehrdeutig|متعدد المعاني
wesentlich|جوهري
maßgeblich|حاسم / معتمد
vorrangig|ذو أولوية
nachrangig|ثانوي الأولوية
verhältnismäßig|متناسب
unverhältnismäßig|غير متناسب
fristgerecht|ضمن المهلة
termingerecht|في الموعد المحدد
unverzüglich|دون تأخير
unmittelbar|مباشر
mittelbar|غير مباشر
grundsätzlich|من حيث المبدأ
gegebenenfalls|عند الاقتضاء
nachträglich|لاحقًا
vorsorglich|احترازيًا
zwingend|إلزامي حتمًا
hinreichend|كافٍ
unzureichend|غير كافٍ
angemessen|مناسب / معقول
unangemessen|غير مناسب
vertretbar|يمكن تبريره
unvertretbar|لا يمكن تبريره
plausibel|معقول منطقيًا
unplausibel|غير منطقي
ergebnisorientiert|موجّه نحو النتائج
lösungsorientiert|موجّه نحو الحل
zielgerichtet|هادف
schrittweise|تدريجيًا
voraussichtlich|على الأرجح
nachweisbar|قابل للإثبات
reproduzierbar|قابل لإعادة الإنتاج
skalierbar|قابل للتوسع
wartbar|قابل للصيانة
erweiterbar|قابل للتوسعة
ausfallsicher|مقاوم للأعطال
fehlertolerant|متحمل للأخطاء
redundanzfrei|خالٍ من التكرار
ermitteln|يحدّد / يستقصي
ermittelt|تم تحديده / يستقصي
feststellen|يتحقق / يثبت
festgestellt|تم التحقق منه
gewährleisten|يضمن
gewährleistet|مضمون / تم ضمانه
zuweisen|يسند / يخصص
zugewiesen|مُسنَد / مخصص
entziehen|يسحب / يلغي
entzogen|مسحوب / ملغى
bereitstellen|يوفّر / يتيح
bereitgestellt|تم توفيره / إتاحته
durchführen|ينفّذ / يجري
durchgeführt|تم تنفيذه
überwachen|يراقب
überwacht|خاضع للمراقبة
beeinträchtigen|يؤثر سلبًا
beeinträchtigt|متأثر سلبًا
wiederherstellen|يستعيد
wiederhergestellt|تمت استعادته
absichern|يؤمّن / يحمي
abgesichert|مؤمّن / محمي
verwalten|يدير
verwaltet|تتم إدارته
verarbeiten|يعالج
verarbeitet|تمت معالجته
übertragen|ينقل
übertragenen|المنقول
auswerten|يقيّم / يحلل النتائج
ausgewertet|تم تقييمه / تحليله
überprüfen|يتحقق / يراجع
überprüft|تم التحقق منه
nachvollziehen|يتتبع ويفهم
voraussetzen|يفترض / يشترط
vorausgesetzt|مشروط / مفترض
berücksichtigen|يراعي
berücksichtigt|تمت مراعاته
ermöglichen|يتيح
ermöglicht|يتيح / تم تمكينه
verhindern|يمنع
verhindert|تم منعه
einschränken|يقيّد
eingeschränkt|مقيّد
erweitern|يوسّع
erweitert|موسّع
zuordnen|يسند / يربط
zugeordnet|مُسنَد / مرتبط
ableiten|يستنتج
abgeleitet|مُستنتج
begründen|يعلّل
begründet|معلّل
beurteilen|يقيّم
bewerten|يقيّم
vergleichen|يقارن
gegenüberstellen|يقابل / يقارن
unterscheiden|يميّز
abgrenzen|يميّز ويفصل
erläutern|يشرح بالتفصيل
beschreiben|يصف
benennen|يسمّي / يذكر
angeben|يذكر / يحدد
nachweisen|يثبت
dokumentieren|يوثّق
protokollieren|يسجّل في محضر
kennzeichnen|يميّز بعلامة
verdeutlichen|يوضّح
veranschaulichen|يشرح بمثال أو رسم
zusammenfassen|يلخّص
vervollständigen|يكمل
ergänzen|يستكمل / يضيف
auswählen|يختار
festlegen|يحدد بصورة ملزمة
vereinbaren|يتفق على
beantragen|يتقدم بطلب
genehmigen|يوافق / يرخّص
freigeben|يوافق على الإتاحة
widerrufen|يلغي / يسحب الموافقة
bestätigen|يؤكد
ablehnen|يرفض
einhalten|يلتزم بـ
überschreiten|يتجاوز
unterschreiten|يقل عن
einleiten|يباشر / يبدأ إجراءً
veranlassen|يصدر أمرًا / يتسبب
beauftragen|يكلّف
umsetzen|ينفّذ / يطبق
anwenden|يطبّق
anpassen|يكيّف / يضبط
abstimmen|ينسّق
priorisieren|يرتب حسب الأولوية
eskalieren|يصعّد
eingrenzen|يضيّق النطاق
lokalisieren|يحدد الموقع
reproduzieren|يعيد إنتاج المشكلة
beheben|يصلح
beseitigen|يزيل
vorbeugen|يقي وقائيًا
auslösen|يُطلِق / يسبب
auftreten|يحدث / يظهر
fehlschlagen|يفشل
zur verfügung stehen|يكون متاحًا
zugriff erhalten|يحصل على صلاحية الوصول
zugriff verweigern|يرفض الوصول
eine verbindung herstellen|ينشئ اتصالًا
eine verbindung trennen|يفصل اتصالًا
einen fehler beheben|يصلح خطأً
eine datei wiederherstellen|يستعيد ملفًا
daten sichern|ينسخ البيانات احتياطيًا
daten übertragen|ينقل البيانات
rechte vergeben|يمنح الصلاحيات
rechte entziehen|يسحب الصلاحيات
benutzer verwalten|يدير المستخدمين
eine einstellung ändern|يغيّر إعدادًا
eine änderung übernehmen|يطبّق تغييرًا
eine aufgabe ausführen|ينفّذ مهمة
einen dienst bereitstellen|يوفّر خدمة
eine ursache ermitteln|يحدد سببًا
einen fehler eingrenzen|يضيّق نطاق الخطأ
eine entscheidung treffen|يتخذ قرارًا
eine voraussetzung erfüllen|يستوفي شرطًا مسبقًا
eine prüfung durchführen|يجري فحصًا
eine verbindung überprüfen|يتحقق من اتصال
im fehlerfall|في حال حدوث خطأ
unter bestimmten voraussetzungen|وفق شروط معينة
gemäß den anforderungen|وفقًا للمتطلبات
zur fehlerbehebung|لمعالجة الخطأ
abhängig von|اعتمادًا على
im gegensatz zu|على خلاف
in der regel|كقاعدة عامة
unter anderem|من بين أمور أخرى
hinsichtlich|فيما يتعلق بـ
in bezug auf|بالنسبة إلى
unter berücksichtigung|مع مراعاة
unter einhaltung|مع الالتزام بـ
im hinblick auf|بالنظر إلى
auf grundlage von|استنادًا إلى
anhand von|استنادًا إلى / باستخدام
mithilfe von|بمساعدة
im rahmen von|في إطار
im zusammenhang mit|في سياق / ارتباطًا بـ
zum zweck der|لغرض
bei bedarf|عند الحاجة
falls erforderlich|إذا لزم الأمر
sofern vorhanden|إن وُجد
sofern zutreffend|إذا كان منطبقًا
gegebenenfalls anpassen|التعديل عند الاقتضاء
ordnungsgemäß durchführen|التنفيذ على نحو سليم
vollständig dokumentieren|التوثيق الكامل
eindeutig zuordnen|الإسناد بصورة واضحة
fristgerecht einreichen|التقديم ضمن المهلة
dauerhaft gewährleisten|الضمان بصورة دائمة
regelmäßig überprüfen|التحقق بانتظام
geeignete maßnahmen|إجراءات مناسبة
erforderliche maßnahmen|الإجراءات اللازمة
technische maßnahmen|إجراءات تقنية
organisatorische maßnahmen|إجراءات تنظيمية
vorbeugende maßnahmen|إجراءات وقائية
geeignete vorkehrungen|احتياطات مناسبة
nach aktuellem stand|وفق الوضع الحالي
stand der technik|أحدث مستوى تقني متاح
bestimmungsgemäße verwendung|الاستخدام وفق الغرض المحدد
unbefugter zugriff|وصول غير مصرح به
unberechtigter zugriff|وصول بلا صلاحية
berechtigter zugriff|وصول مصرح به
nach vorheriger zustimmung|بعد موافقة مسبقة
ohne vorherige ankündigung|دون إشعار مسبق
mit sofortiger wirkung|بأثر فوري
innerhalb der frist|ضمن المهلة
nach ablauf der frist|بعد انتهاء المهلة
zum angegebenen zeitpunkt|في الوقت المحدد
mit vertretbarem aufwand|بجهد معقول
mit angemessenen mitteln|بوسائل مناسبة
welche aussage trifft zu|أي عبارة صحيحة؟
welche aussage ist korrekt|أي عبارة صحيحة؟
welche voraussetzung muss erfüllt sein|ما الشرط الواجب استيفاؤه؟
welche auswirkung hat|ما أثر ...؟
welcher zusammenhang besteht|ما العلاقة القائمة؟
worin besteht der unterschied|فيمَ يكمن الفرق؟
was ist hierbei zu beachten|ما الذي يجب مراعاته هنا؟
welche maßnahme ist geeignet|ما الإجراء المناسب؟
welche ursache kommt infrage|ما السبب المحتمل؟
was lässt sich daraus ableiten|ما الذي يمكن استنتاجه من ذلك؟
welche vorgehensweise ist sinnvoll|ما طريقة الإجراء المناسبة؟
welche aussage beschreibt|أي عبارة تصف ...؟
am besten|على أفضل نحو
begründen sie ihre antwort|علّل إجابتك
erläutern sie den unterschied|اشرح الفرق بالتفصيل
nennen sie zwei beispiele|اذكر مثالين
geben sie einen vorteil an|اذكر ميزة واحدة
geben sie einen nachteil an|اذكر عيبًا واحدًا
beschreiben sie die funktionsweise|صف آلية العمل
ermitteln sie den wert|حدّد القيمة
berechnen sie das ergebnis|احسب النتيجة
vervollständigen sie die tabelle|أكمل الجدول
ordnen sie die begriffe zu|اربط المصطلحات بما يناسبها
kreuzen sie an|ضع علامة على الإجابة
mehrfachauswahl möglich|يمكن اختيار عدة إجابات
nur eine antwort ist richtig|إجابة واحدة فقط صحيحة
keine der aussagen|لا واحدة من العبارات
alle aussagen sind richtig|جميع العبارات صحيحة
trifft am ehesten zu|هي الأقرب إلى الصواب
nicht zutreffend|غير منطبق / غير صحيح
unter welcher bedingung|تحت أي شرط؟
aus welchem grund|لأي سبب؟
zu welchem zweck|لأي غرض؟
in welcher reihenfolge|بأي ترتيب؟
welche folge ergibt sich|ما النتيجة المترتبة؟
welcher schritt folgt|ما الخطوة التالية؟
wie ist vorzugehen|كيف ينبغي التصرف؟
was muss berücksichtigt werden|ما الذي يجب مراعاته؟
welche angabe fehlt|ما المعلومة الناقصة؟
welche zuordnung ist richtig|أي إسناد صحيح؟
prüfen sie die aussagen|تحقق من العبارات
beurteilen sie den sachverhalt|قيّم وقائع المسألة
nehmen sie stellung|أبدِ رأيك المعلل
zeigen sie rechnerisch|أثبت بالحساب
geben sie das ergebnis an|اذكر النتيجة
runden sie auf|قرّب إلى الأعلى
runden sie ab|قرّب إلى الأسفل
auf zwei nachkommastellen|إلى منزلتين عشريتين
gehen sie davon aus|افترض أن
sofern nicht anders angegeben|ما لم يُذكر خلاف ذلك
unter verwendung der angaben|باستخدام المعطيات
gemäß aufgabenstellung|وفق نص المهمة
aus der abbildung|من الرسم التوضيحي
aus der tabelle|من الجدول
aus dem sachverhalt|من وقائع المسألة
für die weitere bearbeitung|لمتابعة الحل
volle punktzahl|الدرجة الكاملة
anteilige bewertung|تقييم جزئي
lösungsweg|مسار الحل
rechenweg|خطوات الحساب
erwartungshorizont|معايير الإجابة المتوقعة
bewertungseinheit|وحدة تقييم
prüfungsergebnis|نتيجة الامتحان
bestehensgrenze|حد النجاح
punktabzug|خصم نقاط
folgefehler|خطأ ناتج عن خطأ سابق
teilpunkt|نقطة جزئية
bearbeitungshinweis|إرشاد للحل
hilfsmittel|وسيلة مساعدة
zugelassene hilfsmittel|الوسائل المسموح بها
arbeitsrecht|قانون العمل
arbeitsverhältnis|علاقة العمل
arbeitsvertrag|عقد العمل
vertragspartei|طرف تعاقدي
vertragsparteien|أطراف التعاقد
vertragsabschluss|إبرام العقد
vertragsinhalt|محتوى العقد
vertragsfreiheit|حرية التعاقد
vertragsverletzung|إخلال بالعقد
pflichtverletzung|إخلال بالواجب
nebenpflicht|واجب ثانوي
hauptpflicht|واجب رئيسي
arbeitspflicht|واجب أداء العمل
fürsorgepflicht|واجب الرعاية
treuepflicht|واجب الولاء
weisungsrecht|حق إصدار التعليمات
direktionsrecht|سلطة التوجيه
arbeitsentgelt|أجر العمل
vergütung|مقابل مالي / أجر
entgeltfortzahlung|استمرار دفع الأجر
lohnfortzahlung|استمرار دفع الراتب
bruttoentgelt|الأجر الإجمالي
nettoentgelt|صافي الأجر
bruttogehalt|الراتب الإجمالي
nettogehalt|صافي الراتب
gehaltsabrechnung|كشف الراتب
lohnabrechnung|كشف الأجر
lohnsteuer|ضريبة الأجور
steuerklasse|فئة الضريبة
sozialabgabe|اشتراك اجتماعي
sozialabgaben|اشتراكات اجتماعية
beitragspflicht|وجوب دفع الاشتراك
beitragssatz|نسبة الاشتراك
beitragsbemessungsgrenze|سقف احتساب الاشتراكات
versicherungspflicht|إلزام التأمين
pflichtversicherung|تأمين إلزامي
sozialversicherung|التأمين الاجتماعي
krankenversicherung|التأمين الصحي
rentenversicherung|تأمين التقاعد
arbeitslosenversicherung|تأمين البطالة
pflegeversicherung|تأمين الرعاية طويلة الأمد
unfallversicherung|تأمين الحوادث
berufsgenossenschaft|هيئة التأمين ضد حوادث العمل
krankenkasse|صندوق التأمين الصحي
pflegekasse|صندوق تأمين الرعاية
rentenanspruch|استحقاق معاش
regelaltersrente|معاش سن التقاعد النظامي
erwerbsminderungsrente|معاش انخفاض القدرة على العمل
arbeitslosengeld|إعانة البطالة
kurzarbeitergeld|بدل العمل القصير
entgeltersatzleistung|إعانة بديلة عن الأجر
solidarprinzip|مبدأ التضامن
äquivalenzprinzip|مبدأ التكافؤ
subsidiaritätsprinzip|مبدأ التبعية
tarifvertrag|اتفاقية جماعية
tarifautonomie|استقلالية التفاوض الجماعي
tarifbindung|الخضوع لاتفاقية جماعية
tarifpartei|طرف الاتفاقية الجماعية
tarifverhandlung|مفاوضة جماعية
tarifverhandlungen|مفاوضات جماعية
manteltarifvertrag|اتفاقية جماعية إطارية
entgelttarifvertrag|اتفاقية أجور جماعية
flächentarifvertrag|اتفاقية جماعية لقطاع ومنطقة
haustarifvertrag|اتفاقية جماعية خاصة بالشركة
friedenspflicht|واجب السلم العمالي
arbeitskampf|نزاع عمالي جماعي
warnstreik|إضراب تحذيري
urabstimmung|اقتراع أعضاء النقابة
aussperrung|إغلاق صاحب العمل للمنشأة
schlichtung|وساطة لتسوية النزاع
gewerkschaft|نقابة عمالية
arbeitgeberverband|اتحاد أصحاب العمل
betriebsrat|مجلس العاملين
betriebsratswahl|انتخاب مجلس العاملين
betriebsversammlung|اجتماع العاملين
betriebsvereinbarung|اتفاقية منشأة
mitbestimmung|المشاركة في اتخاذ القرار
mitwirkungsrecht|حق المشاركة
mitbestimmungsrecht|حق المشاركة في القرار
anhörungsrecht|حق الاستماع للرأي
informationsrecht|حق الحصول على المعلومات
betriebsverfassungsgesetz|قانون تنظيم المنشآت
personalrat|مجلس الموظفين
jugendvertretung|تمثيل الشباب والمتدربين
jugend- und auszubildendenvertretung|هيئة تمثيل الشباب والمتدربين
gleichstellungsbeauftragte|مسؤولة تكافؤ الفرص
kündigung|إنهاء عقد العمل
kündigungsfrist|مهلة الإنهاء
kündigungsschutz|الحماية من الفصل
kündigungsschutzgesetz|قانون الحماية من الفصل
ordentliche kündigung|إنهاء عادي للعقد
außerordentliche kündigung|إنهاء استثنائي للعقد
fristlose kündigung|إنهاء فوري بلا مهلة
betriebsbedingte kündigung|فصل لأسباب تشغيلية
personenbedingte kündigung|فصل لأسباب شخصية
verhaltensbedingte kündigung|فصل لأسباب سلوكية
änderungskündigung|إنهاء مع عرض شروط معدلة
aufhebungsvertrag|اتفاق إنهاء بالتراضي
abfindung|تعويض إنهاء الخدمة
abmahnung|إنذار وظيفي
ermahnung|تنبيه وظيفي
probezeit|فترة التجربة
befristung|تحديد مدة العقد
befristeter arbeitsvertrag|عقد عمل محدد المدة
unbefristeter arbeitsvertrag|عقد عمل غير محدد المدة
teilzeitbeschäftigung|عمل بدوام جزئي
vollzeitbeschäftigung|عمل بدوام كامل
geringfügige beschäftigung|عمل هامشي محدود الدخل
arbeitszeitgesetz|قانون ساعات العمل
arbeitszeit|ساعات العمل
ruhezeit|فترة الراحة بين ورديتين
ruhepause|استراحة العمل
mehrarbeit|ساعات عمل إضافية
überstunde|ساعة إضافية
überstunden|ساعات إضافية
nachtarbeit|عمل ليلي
sonntagsarbeit|عمل يوم الأحد
feiertagsarbeit|عمل أيام العطل
urlaubsanspruch|استحقاق الإجازة
erholungsurlaub|إجازة سنوية للراحة
sonderurlaub|إجازة خاصة
mutterschutz|حماية الأمومة
elternzeit|إجازة الوالدين
jugendarbeitsschutz|حماية عمل الأحداث
jugendarbeitsschutzgesetz|قانون حماية عمل الأحداث
arbeitsschutz|السلامة والصحة المهنية
arbeitsschutzgesetz|قانون السلامة المهنية
arbeitssicherheit|السلامة المهنية
unfallverhütung|الوقاية من الحوادث
unfallverhütungsvorschrift|لائحة الوقاية من الحوادث
gefährdungsbeurteilung|تقييم المخاطر المهنية
betriebsanweisung|تعليمات تشغيل المنشأة
sicherheitsunterweisung|إحاطة السلامة
schutzkleidung|ملابس الوقاية
persönliche schutzausrüstung|معدات الوقاية الشخصية
arbeitsunfall|حادث عمل
wegeunfall|حادث في طريق العمل
meldepflichtiger unfall|حادث واجب الإبلاغ
ausbildungsvertrag|عقد التدريب المهني
ausbildungsverhältnis|علاقة التدريب المهني
ausbildungsrahmenplan|الخطة الإطارية للتدريب
ausbildungsordnung|لائحة التدريب
berufsbildungsgesetz|قانون التدريب المهني
ausbildungsvergütung|مكافأة التدريب المهني
ausbildungsdauer|مدة التدريب
probezeit der ausbildung|فترة تجربة التدريب
ausbilder|مدرّب مهني
auszubildender|متدرّب مهني
auszubildende|متدرّبة / متدرّب مهني
berichtsheft|دفتر سجل التدريب
freistellung|إعفاء من العمل
prüfungsteilnahme|المشاركة في الامتحان
übernahme|التوظيف بعد التدريب
kaufvertrag|عقد بيع
rechtsgeschäft|تصرف قانوني
willenserklärung|إعلان إرادة قانونية
geschäftsfähigkeit|الأهلية القانونية للتصرف
geschäftsunfähigkeit|انعدام الأهلية القانونية
beschränkte geschäftsfähigkeit|أهلية قانونية محدودة
anfechtung|طعن / إبطال
nichtigkeit|البطلان
widerrufsrecht|حق العدول
rücktrittsrecht|حق فسخ العقد
eigentumsvorbehalt|الاحتفاظ بالملكية
gefahrenübergang|انتقال تبعة المخاطر
sachmangel|عيب مادي
rechtsmangel|عيب قانوني
mängelhaftung|المسؤولية عن العيوب
nacherfüllung|تنفيذ لاحق لإزالة العيب
nachbesserung|إصلاح لاحق
ersatzlieferung|تسليم بديل
minderung|تخفيض السعر
schadensersatz|تعويض عن الضرر
haftung|مسؤولية قانونية
verschulden|خطأ موجب للمسؤولية
fahrlässigkeit|إهمال
grobe fahrlässigkeit|إهمال جسيم
vorsatz|قصد
verjährung|تقادم
verjährungsfrist|مدة التقادم
mahnung|إنذار بالدفع
zahlungsverzug|تأخر في الدفع
lieferverzug|تأخر في التسليم
annahmeverzug|تأخر الدائن في الاستلام
erfüllungsort|مكان التنفيذ
gerichtsstand|الاختصاص المكاني للمحكمة
allgemeine geschäftsbedingungen|الشروط والأحكام العامة
angebot und nachfrage|العرض والطلب
marktgleichgewicht|توازن السوق
gleichgewichtspreis|سعر التوازن
angebotsüberschuss|فائض العرض
nachfrageüberschuss|فائض الطلب
verkäufermarkt|سوق البائع
käufermarkt|سوق المشتري
vollkommener markt|سوق كامل
unvollkommener markt|سوق غير كامل
monopol|احتكار
oligopol|احتكار قلة
polypol|سوق متعدد المنافسين
konjunktur|الدورة الاقتصادية
konjunkturzyklus|دورة النشاط الاقتصادي
aufschwung|انتعاش اقتصادي
hochkonjunktur|رواج اقتصادي
abschwung|تباطؤ اقتصادي
rezession|ركود
depression|كساد
bruttoinlandsprodukt|الناتج المحلي الإجمالي
wirtschaftswachstum|النمو الاقتصادي
inflation|التضخم
deflation|الانكماش
preisstabilität|استقرار الأسعار
vollbeschäftigung|التوظيف الكامل
außenwirtschaftliches gleichgewicht|التوازن الاقتصادي الخارجي
magisches viereck|المربع السحري للسياسة الاقتصادية
produktivität|الإنتاجية
rentabilität|الربحية
liquidität|السيولة
ökonomisches prinzip|المبدأ الاقتصادي
minimalprinzip|مبدأ الحد الأدنى
maximalprinzip|مبدأ الحد الأقصى
gewinnschwelle|نقطة التعادل
deckungsbeitrag|هامش المساهمة
fixkosten|تكاليف ثابتة
variable kosten|تكاليف متغيرة
gesamtkosten|إجمالي التكاليف
stückkosten|تكلفة الوحدة
einzelkosten|تكاليف مباشرة
gemeinkosten|تكاليف غير مباشرة
anschaffungskosten|تكاليف الاقتناء
betriebskosten|تكاليف التشغيل
abschreibung|إهلاك
nutzungsdauer|مدة الاستخدام
rechtsform|الشكل القانوني
einzelunternehmen|منشأة فردية
personengesellschaft|شركة أشخاص
kapitalgesellschaft|شركة أموال
offene handelsgesellschaft|شركة تضامن تجارية
kommanditgesellschaft|شركة توصية بسيطة
gesellschaft mit beschränkter haftung|شركة ذات مسؤولية محدودة
aktiengesellschaft|شركة مساهمة
komplementär|شريك متضامن
kommanditist|شريك موصٍ
stammkapital|رأس المال الأساسي
grundkapital|رأس مال الأسهم
geschäftsanteil|حصة في الشركة
gewinnverteilung|توزيع الأرباح
verlustbeteiligung|المشاركة في الخسارة
vertretungsbefugnis|صلاحية التمثيل
geschäftsführung|إدارة الشركة
prokura|تفويض تجاري عام
handlungsvollmacht|تفويض تجاري
einzelvollmacht|تفويض فردي
gesamtvollmacht|تفويض جماعي
artvollmacht|تفويض لنوع معاملات محدد
unternehmensziel|هدف المنشأة
ökonomisches ziel|هدف اقتصادي
ökologisches ziel|هدف بيئي
soziales ziel|هدف اجتماعي
zielkonflikt|تعارض الأهداف
zielharmonie|توافق الأهداف
zielneutralität|حياد الأهداف
aufbauorganisation|التنظيم الهيكلي
ablauforganisation|تنظيم سير العمل
einliniensystem|نظام الخط الإداري الواحد
mehrliniensystem|نظام الخطوط الإدارية المتعددة
stabliniensystem|نظام الخط مع وحدات استشارية
matrixorganisation|تنظيم مصفوفي
instanz|جهة إدارية مخولة
stabsstelle|وحدة استشارية
leitungsspanne|نطاق الإشراف
arbeitsteilung|تقسيم العمل
stellenbeschreibung|وصف وظيفي
organigramm|مخطط تنظيمي
globalisierung|العولمة
internationalisierung|التدويل
freihandel|التجارة الحرة
protektionismus|الحمائية
zollschranke|حاجز جمركي
nichttarifäres handelshemmnis|عائق تجاري غير جمركي
wechselkurs|سعر الصرف
subvention|إعانة حكومية
verbraucherschutz|حماية المستهلك
wettbewerbsrecht|قانون المنافسة
kartell|كارتل / اتفاق احتكاري
fusion|اندماج شركات
unternehmenszusammenschluss|اتحاد شركات
nachhaltigkeit|الاستدامة
ressourcenschonung|الحفاظ على الموارد
chancengleichheit|تكافؤ الفرص
gleichbehandlung|المساواة في المعاملة
diskriminierung|تمييز
allgemeines gleichbehandlungsgesetz|القانون العام للمساواة في المعاملة
datenschutz|حماية البيانات
personenbezogene daten|بيانات شخصية
betroffenenrecht|حق صاحب البيانات
auskunftsrecht|حق الحصول على المعلومات
recht auf löschung|الحق في المحو
datenminimierung|تقليل البيانات
zweckbindung|تحديد الغرض
rechtmäßigkeit|المشروعية
rechenschaftspflicht|واجب إثبات الامتثال
auftragsverarbeitung|معالجة البيانات بالنيابة
verantwortlicher|المتحكم في البيانات
datenschutzbeauftragter|مسؤول حماية البيانات
datenschutzverletzung|خرق حماية البيانات
meldepflicht|واجب الإبلاغ
aufsichtsbehörde|سلطة رقابية
zugriffsberechtigung|صلاحية الوصول
zugriffsberechtigungen|صلاحيات الوصول
zugriffskontrolle|التحكم في الوصول
zugriffsbeschränkung|تقييد الوصول
zugriffsregelung|تنظيم الوصول
zugriffsversuch|محاولة وصول
zugriffsversuche|محاولات وصول
zugriffsprotokoll|سجل الوصول
zugriffsschutz|حماية الوصول
zugriffsrecht|حق الوصول
zugriffsrechte|حقوق الوصول
berechtigungskonzept|مفهوم الصلاحيات
berechtigungsprüfung|فحص الصلاحيات
berechtigungsstufe|مستوى الصلاحية
berechtigungsgruppe|مجموعة الصلاحيات
berechtigungsvergabe|منح الصلاحيات
rechteverwaltung|إدارة الحقوق
rollenverwaltung|إدارة الأدوار
rollenkonzept|مفهوم الأدوار
benutzerverwaltung|إدارة المستخدمين
benutzeroberfläche|واجهة المستخدم
benutzeranmeldung|تسجيل دخول المستخدم
benutzerauthentifizierung|مصادقة المستخدم
benutzerkennung|معرّف المستخدم
benutzername|اسم المستخدم
benutzerprofil|ملف المستخدم
benutzergruppe|مجموعة المستخدمين
benutzergruppen|مجموعات المستخدمين
benutzerverzeichnis|دليل المستخدمين
benutzeraktivität|نشاط المستخدم
benutzersitzung|جلسة المستخدم
sitzungsverwaltung|إدارة الجلسات
sitzungsdauer|مدة الجلسة
sitzungsablauf|انتهاء الجلسة
kontosperrung|قفل الحساب
kontoschutz|حماية الحساب
kennwortrichtlinie|سياسة كلمات المرور
kennwortänderung|تغيير كلمة المرور
kennwortrücksetzung|إعادة تعيين كلمة المرور
kennwortkomplexität|تعقيد كلمة المرور
mindestens erforderliche länge|الحد الأدنى المطلوب للطول
mehrfaktorverfahren|إجراء متعدد العوامل
identitätsprüfung|التحقق من الهوية
identitätsverwaltung|إدارة الهوية
identitätsanbieter|مزود الهوية
authentisierungsverfahren|إجراء المصادقة
autorisierungsverfahren|إجراء منح الصلاحية
anmeldeversuch|محاولة تسجيل دخول
fehlgeschlagener anmeldeversuch|محاولة تسجيل دخول فاشلة
erfolgreiche anmeldung|تسجيل دخول ناجح
einmalpasswort|كلمة مرور لمرة واحدة
sicherheitstoken|رمز أمني
netzwerkverbindung|اتصال الشبكة
netzwerkverbindungen|اتصالات الشبكة
netzwerkanbindung|ربط الشبكة
netzwerkinfrastruktur|البنية التحتية للشبكة
netzwerkarchitektur|معمارية الشبكة
netzwerkaufbau|بنية الشبكة
netzwerkplan|مخطط الشبكة
netzwerkkomponente|مكوّن شبكة
netzwerkkomponenten|مكوّنات الشبكة
netzwerkgerät|جهاز شبكة
netzwerkgeräte|أجهزة شبكة
netzwerkschnittstelle|واجهة شبكة
netzwerkadapter|مهايئ شبكة
netzwerkkarte|بطاقة شبكة
netzwerksegment|مقطع شبكة
netzwerksegmente|مقاطع شبكة
netzwerksegmentierung|تجزئة الشبكة
netzwerktrennung|فصل الشبكات
netzwerkzugang|دخول الشبكة
netzwerkverkehr|حركة مرور الشبكة
netzwerkleistung|أداء الشبكة
netzwerkauslastung|استخدام سعة الشبكة
netzwerküberwachung|مراقبة الشبكة
netzwerkanalyse|تحليل الشبكة
netzwerkdiagnose|تشخيص الشبكة
netzwerkfehler|خطأ شبكة
netzwerkstörung|عطل شبكة
netzwerkproblem|مشكلة شبكة
netzwerkkonfiguration|تهيئة الشبكة
netzwerkeinstellung|إعداد الشبكة
netzwerkadresse|عنوان الشبكة
netzadressierung|عنونة الشبكة
netzwerkkennung|معرّف الشبكة
teilnetz|شبكة فرعية
teilnetze|شبكات فرعية
teilnetzmaske|قناع الشبكة الفرعية
präfixlänge|طول البادئة
netzanteil|جزء الشبكة
hostanteil|جزء المضيف
hostadresse|عنوان المضيف
hostbereich|نطاق عناوين المضيفين
adressbereich|نطاق العناوين
adressraum|فضاء العناوين
adressvergabe|تخصيص العناوين
adresszuweisung|إسناد العناوين
adressauflösung|تحويل الاسم إلى عنوان
namensauflösung|حل الأسماء
namensraum|فضاء الأسماء
domänenname|اسم النطاق
vollqualifizierter domänenname|اسم نطاق مؤهل بالكامل
rechnername|اسم الحاسوب
hosteintrag|سجل مضيف
ressourceneintrag|سجل مورد
weiterleitungszone|منطقة بحث أمامي
rückwärtsauflösungszone|منطقة بحث عكسي
namensserver|خادم أسماء
primärer namensserver|خادم أسماء أساسي
sekundärer namensserver|خادم أسماء ثانوي
zwischenspeicherung|تخزين مؤقت
zwischengespeicherte antwort|إجابة مخزنة مؤقتًا
gültigkeitsdauer|مدة الصلاحية
autoritative antwort|إجابة موثوقة
rekursive abfrage|استعلام تكراري كامل
iterative abfrage|استعلام تكراري مرحلي
dhcp-bereich|نطاق DHCP
adresspool|مجموعة عناوين
lease-dauer|مدة تأجير العنوان
adressreservierung|حجز عنوان
bereichsoption|خيار النطاق
standardgateway|البوابة الافتراضية
gatewayadresse|عنوان البوابة
routeradresse|عنوان الموجّه
routingentscheidung|قرار التوجيه
routingverfahren|طريقة التوجيه
routingprotokoll|بروتوكول التوجيه
routinginformation|معلومة توجيه
routingeintrag|إدخال توجيه
zielnetz|الشبكة الوجهة
zieladresse|عنوان الوجهة
quelladresse|عنوان المصدر
nächster hop|القفزة التالية
standardroute|المسار الافتراضي
statische route|مسار ثابت
dynamische route|مسار ديناميكي
route zusammenfassen|تلخيص المسارات
routenmetrik|مقياس المسار
verwaltungskosten einer route|الكلفة الإدارية للمسار
weiterleitungsentscheidung|قرار إعادة التوجيه
paketweiterleitung|إعادة توجيه الحزم
weiterleitungstabelle|جدول إعادة التوجيه
vermittlungsschicht|طبقة الشبكة
transportschicht|طبقة النقل
sicherungsschicht|طبقة ربط البيانات
bitübertragungsschicht|الطبقة الفيزيائية
sitzungsschicht|طبقة الجلسة
darstellungsschicht|طبقة العرض
protokollstapel|مكدس البروتوكولات
protokolldateneinheit|وحدة بيانات البروتوكول
datenkapselung|تغليف البيانات
entkapselung|فك تغليف البيانات
paketkopf|ترويسة الحزمة
nutzdaten|البيانات الفعلية
prüfsumme|قيمة التحقق
sequenznummer|رقم التسلسل
bestätigungsnummer|رقم التأكيد
verbindungsaufbau|إنشاء الاتصال
verbindungsabbau|إنهاء الاتصال
verbindungsorientiert|معتمد على الاتصال
verbindungslos|دون اتصال
zuverlässige übertragung|نقل موثوق
flusssteuerung|التحكم في التدفق
überlaststeuerung|التحكم في الازدحام
empfangsbestätigung|تأكيد الاستلام
zeitüberschreitung|انتهاء المهلة
erneute übertragung|إعادة الإرسال
segmentgröße|حجم المقطع
fenstergröße|حجم النافذة
portnummer|رقم المنفذ
quellport|منفذ المصدر
zielport|منفذ الوجهة
socketadresse|عنوان المقبس
wohlbekannter port|منفذ معروف
ephemerer port|منفذ مؤقت
verbindungszustand|حالة الاتصال
leitungsvermittlung|تبديل الدارات
paketvermittlung|تبديل الحزم
broadcastdomäne|نطاق البث
kollisionsdomäne|نطاق التصادم
broadcastadresse|عنوان البث
multicastadresse|عنوان البث المتعدد
unicastadresse|عنوان أحادي الوجهة
link-lokale adresse|عنوان محلي للوصلة
öffentlicher adressbereich|نطاق عناوين عام
privater adressbereich|نطاق عناوين خاص
adressübersetzung|ترجمة العناوين
portadressübersetzung|ترجمة العناوين والمنافذ
vlan-kennung|معرّف VLAN
vlan-zugehörigkeit|الانتماء إلى VLAN
zugangsport|منفذ وصول
trunk-port|منفذ جذع
markierter rahmen|إطار موسوم
unmarkierter rahmen|إطار غير موسوم
natives vlan|شبكة VLAN أصلية
vlan-übergreifendes routing|توجيه بين شبكات VLAN
schleifenvermeidung|منع الحلقات
wurzelbrücke|الجسر الجذري
brückenkennung|معرّف الجسر
pfadkosten|تكلفة المسار
portstatus|حالة المنفذ
kanalbündelung|تجميع القنوات
verbindungsaushandlung|التفاوض على الاتصال
übertragungsrate|معدل النقل
bandbreite|عرض النطاق
datendurchsatz|معدل مرور البيانات
latenzzeit|زمن التأخير
laufzeitverzögerung|تأخير الانتقال
schwankungsbreite|مقدار التذبذب
paketverlust|فقد الحزم
signalstärke|قوة الإشارة
signalqualität|جودة الإشارة
störsignal|إشارة تشويش
übertragungsmedium|وسيط النقل
kupferleitung|كابل نحاسي
glasfaserleitung|كابل ألياف ضوئية
lichtwellenleiter|ألياف ضوئية
einmodenfaser|ليف أحادي النمط
mehrmodenfaser|ليف متعدد الأنماط
steckverbindung|وصلة قابلة للفصل
kabelbelegung|توزيع أسلاك الكابل
schirmung|تدريع
dämpfung|توهين
übersprechen|تداخل بين الأزواج
drahtloses netzwerk|شبكة لاسلكية
funknetz|شبكة لاسلكية
funkkanal|قناة لاسلكية
kanalbreite|عرض القناة
zugangspunkt|نقطة وصول
netzwerkname|اسم الشبكة
roaming|تجوال شبكي
funkabdeckung|تغطية لاسلكية
ausleuchtung|مسح التغطية اللاسلكية
kanalüberlappung|تداخل القنوات
sicherheitsrichtlinie|سياسة أمنية
sicherheitsrichtlinien|سياسات أمنية
sicherheitskonzept|مفهوم أمني
sicherheitsziel|هدف أمني
sicherheitsziele|أهداف أمنية
sicherheitsniveau|مستوى الأمان
sicherheitsmaßnahme|إجراء أمني
sicherheitsmaßnahmen|إجراءات أمنية
sicherheitsvorfall|حادث أمني
sicherheitsereignis|حدث أمني
sicherheitslücke|ثغرة أمنية
schwachstelle|نقطة ضعف
bedrohung|تهديد
bedrohungslage|وضع التهديدات
angriffsfläche|سطح الهجوم
angriffsvektor|متجه الهجوم
angriffsszenario|سيناريو هجوم
schutzbedarf|حاجة الحماية
schutzbedarfsfeststellung|تحديد الحاجة إلى الحماية
schutzmaßnahme|إجراء حماية
grundschutz|الحماية الأساسية
vertrauliche daten|بيانات سرية
schutzwürdige daten|بيانات جديرة بالحماية
datenintegrität|سلامة البيانات
systemintegrität|سلامة النظام
authentizität|الأصالة
nichtabstreitbarkeit|عدم الإنكار
belastbarkeit|القدرة على التحمل
widerstandsfähigkeit|المرونة في مواجهة الأعطال
ausfallsicherheit|مقاومة الأعطال
notfallvorsorge|الاستعداد للطوارئ
notfallplan|خطة طوارئ
notfallhandbuch|دليل الطوارئ
notfallbetrieb|تشغيل الطوارئ
wiederanlaufplan|خطة إعادة التشغيل
geschäftsfortführung|استمرارية الأعمال
geschäftskontinuität|استمرارية الأعمال
maximal tolerierbare ausfallzeit|أقصى مدة توقف مقبولة
maximaler datenverlust|أقصى فقد بيانات مقبول
sicherungsstrategie|استراتيجية النسخ الاحتياطي
sicherungskonzept|مفهوم النسخ الاحتياطي
sicherungsplan|خطة النسخ الاحتياطي
sicherungsintervall|فاصل النسخ الاحتياطي
sicherungsmedium|وسيط النسخ الاحتياطي
sicherungsziel|وجهة النسخ الاحتياطي
sicherungskopie|نسخة احتياطية
datensicherung|نسخ البيانات احتياطيًا
vollsicherung|نسخة احتياطية كاملة
differenzielle sicherung|نسخة احتياطية تفاضلية
inkrementelle datensicherung|نسخة احتياطية تزايدية
generationenprinzip|مبدأ أجيال النسخ الاحتياطي
aufbewahrungsfrist|مدة الاحتفاظ
auslagerung|حفظ نسخة خارج الموقع
rücksicherung|استرجاع النسخة الاحتياطية
wiederherstellungstest|اختبار الاستعادة
wiederherstellungszeit|زمن الاستعادة
wiederherstellungsziel|هدف الاستعادة
datenwiederherstellung|استعادة البيانات
notstromversorgung|إمداد طاقة احتياطي
unterbrechungsfreie stromversorgung|مزود طاقة غير منقطع
überspannungsschutz|حماية من زيادة الجهد
brandabschnitt|قطاع حريق
zutrittskontrolle|التحكم في الدخول المادي
zugangskontrolle|التحكم في الوصول المنطقي
weitergabekontrolle|التحكم في نقل البيانات
eingabekontrolle|التحكم في إدخال البيانات
auftragskontrolle|التحكم في المعالجة بالنيابة
verfügbarkeitskontrolle|ضمان التوافر
trennungskontrolle|التحكم في الفصل
verschlüsselungsverfahren|خوارزمية تشفير
symmetrische verschlüsselung|تشفير متماثل
asymmetrische verschlüsselung|تشفير غير متماثل
transportverschlüsselung|تشفير أثناء النقل
speicherverschlüsselung|تشفير أثناء التخزين
festplattenverschlüsselung|تشفير القرص
schlüsselverwaltung|إدارة المفاتيح
schlüsselerzeugung|توليد المفتاح
schlüsselaustausch|تبادل المفاتيح
schlüsselmaterial|مادة المفتاح
schlüssellänge|طول المفتاح
geheimer schlüssel|مفتاح سري
öffentlicher schlüssel|مفتاح عام
privater schlüssel|مفتاح خاص
schlüsselpaar|زوج مفاتيح
digitale signatur|توقيع رقمي
signaturprüfung|التحقق من التوقيع
hashfunktion|دالة تجزئة
hashwert|قيمة تجزئة
passwort-hash|تجزئة كلمة المرور
zufallswert|قيمة عشوائية
zertifikatsstelle|سلطة إصدار شهادات
zertifikatskette|سلسلة شهادات
stammzertifikat|شهادة جذر
serverzertifikat|شهادة خادم
clientzertifikat|شهادة عميل
zertifikatsinhaber|صاحب الشهادة
zertifikatsprüfung|التحقق من الشهادة
zertifikatswiderruf|إلغاء الشهادة
widerrufsliste|قائمة الشهادات الملغاة
gültigkeitszeitraum|فترة الصلاحية
vertrauensstellung|علاقة ثقة
vertrauensanker|مرساة ثقة
firewallrichtlinie|سياسة الجدار الناري
firewallregelwerk|مجموعة قواعد الجدار الناري
paketfilter|مرشح حزم
zustandsbehaftete firewall|جدار ناري يتتبع حالة الاتصال
anwendungsfirewall|جدار حماية للتطبيقات
regelreihenfolge|ترتيب القواعد
eingehender datenverkehr|حركة بيانات واردة
ausgehender datenverkehr|حركة بيانات صادرة
erlaubnisregel|قاعدة سماح
sperrregel|قاعدة حظر
quellnetz|الشبكة المصدر
zielsystem|النظام الوجهة
protokolltyp|نوع البروتوكول
protokollanalyse|تحليل البروتوكول
verkehrsanalyse|تحليل حركة البيانات
einbruchserkennung|كشف التسلل
einbruchsverhinderung|منع التسلل
angriffserkennung|كشف الهجوم
schadsoftware|برمجية خبيثة
erpressungssoftware|برمجية فدية
schadcode|شيفرة خبيثة
phishingangriff|هجوم تصيد
manipulationsversuch|محاولة تلاعب
brute-force-angriff|هجوم تخمين شامل
wörterbuchangriff|هجوم القاموس
dienstverweigerungsangriff|هجوم حجب الخدمة
verteilte dienstverweigerung|حجب خدمة موزع
zwischenstellenangriff|هجوم الوسيط
sitzungsübernahme|اختطاف الجلسة
rechteausweitung|تصعيد الصلاحيات
social engineering|هندسة اجتماعية
sicherheitsbewusstsein|وعي أمني
systemverwaltung|إدارة النظام
systemadministration|إدارة الأنظمة
systemadministrator|مسؤول النظام
systemumgebung|بيئة النظام
systemzustand|حالة النظام
systemauslastung|استخدام موارد النظام
systemleistung|أداء النظام
systemanforderung|متطلب نظام
systemvoraussetzung|شرط تشغيل النظام
systemkomponente|مكوّن نظام
systemressource|مورد نظام
systemüberwachung|مراقبة النظام
systemprotokoll|سجل النظام
systemmeldung|رسالة نظام
systemfehler|خطأ نظام
systemwiederherstellung|استعادة النظام
systemabbild|صورة النظام
systemaktualisierung|تحديث النظام
betriebssystemkern|نواة نظام التشغيل
kernelmodul|وحدة النواة
gerätedatei|ملف جهاز
dateisystemtreiber|برنامج تشغيل نظام الملفات
dateisystemprüfung|فحص نظام الملفات
dateisystemstruktur|بنية نظام الملفات
verzeichnisstruktur|بنية المجلدات
stammverzeichnis|المجلد الجذري
arbeitsverzeichnis|مجلد العمل
unterverzeichnis|مجلد فرعي
einhängepunkt|نقطة تركيب
datenträgerverwaltung|إدارة الأقراص
speicherverwaltung|إدارة الذاكرة والتخزين
speicherbereich|منطقة تخزين
speicherbedarf|حاجة التخزين
speicherkapazität|سعة التخزين
speicherauslastung|استخدام التخزين
speicherplatzbelegung|إشغال مساحة التخزين
speicherzugriff|وصول إلى الذاكرة
arbeitsspeicherauslastung|استخدام ذاكرة RAM
virtueller adressraum|فضاء عناوين افتراضي
auslagerungsdatei|ملف ترحيل الذاكرة
seitenauslagerung|ترحيل صفحات الذاكرة
prozessverwaltung|إدارة العمليات
prozesskennung|معرّف العملية
prozesszustand|حالة العملية
elternprozess|عملية أم
kindprozess|عملية ابنة
hintergrundprozess|عملية خلفية
vordergrundprozess|عملية أمامية
prozesspriorität|أولوية العملية
prozessbeendigung|إنهاء العملية
dienstverwaltung|إدارة الخدمات
dienststatus|حالة الخدمة
dienstabhängigkeit|تبعية الخدمة
dienstkonto|حساب الخدمة
dienststart|بدء الخدمة
starttyp|نوع بدء التشغيل
automatischer start|بدء تلقائي
manueller start|بدء يدوي
ereignisprotokoll|سجل الأحداث
protokolldatei|ملف سجل
protokolleintrag|إدخال سجل
protokollauswertung|تحليل السجلات
protokollrotation|تدوير ملفات السجل
ereignisanzeige|عارض الأحداث
überwachungswert|قيمة مراقبة
schwellenwert|قيمة حدية
warnschwelle|حد التحذير
alarmmeldung|رسالة إنذار
zustandsänderung|تغير الحالة
verfügbarkeitsüberwachung|مراقبة التوافر
leistungsüberwachung|مراقبة الأداء
ressourcenüberwachung|مراقبة الموارد
fernverwaltung|إدارة عن بعد
fernzugriff|وصول عن بعد
remotedesktopverbindung|اتصال سطح مكتب بعيد
verwaltungsschnittstelle|واجهة الإدارة
kommandozeilenschnittstelle|واجهة سطر الأوامر
befehlszeile|سطر الأوامر
befehlsinterpreter|مفسر الأوامر
shell-umgebung|بيئة الصدفة
umgebungsvariable|متغير بيئة
suchpfad|مسار البحث
standardausgabe|المخرج القياسي
standardeingabe|المدخل القياسي
fehlerausgabe|مخرج الأخطاء
ausgabeumleitung|إعادة توجيه المخرجات
eingabeumleitung|إعادة توجيه المدخلات
befehlskette|سلسلة أوامر
befehlshistorie|سجل الأوامر
platzhalterzeichen|رمز بدل
regulärer ausdruck|تعبير نمطي
zeichenkette|سلسلة نصية
dateieigentümer|مالك الملف
dateiberechtigung|صلاحية الملف
ausführungsrecht|صلاحية التنفيذ
verzeichnisrecht|صلاحية المجلد
gruppenberechtigung|صلاحية المجموعة
standardberechtigung|صلاحية افتراضية
vererbte berechtigung|صلاحية موروثة
explizite berechtigung|صلاحية صريحة
besitzübernahme|تولي ملكية الملف
freigabeberechtigung|صلاحية مشاركة
netzwerkfreigabe|مشاركة شبكية
freigabename|اسم المشاركة
gruppenrichtlinie|نهج المجموعة
gruppenrichtlinienobjekt|كائن نهج المجموعة
richtlinienverarbeitung|معالجة النهج
organisationseinheit|وحدة تنظيمية
verzeichnisdienst|خدمة دليل
domänencontroller|متحكم المجال
domänenstruktur|بنية المجال
gesamtstruktur|غابة المجالات
vertrauensdomäne|مجال موثوق
gruppenmitgliedschaft|عضوية المجموعة
globale gruppe|مجموعة عالمية
domänenlokale gruppe|مجموعة محلية في المجال
universelle gruppe|مجموعة شاملة
computerkonto|حساب حاسوب
dienstprinzipalname|اسم كيان الخدمة
virtualisierungsumgebung|بيئة افتراضية
virtualisierungsschicht|طبقة افتراضية
virtualisierungshost|مضيف افتراضي
gastbetriebssystem|نظام تشغيل ضيف
virtuelle maschine|آلة افتراضية
virtuelle festplatte|قرص افتراضي
virtuelle netzwerkkarte|بطاقة شبكة افتراضية
virtueller switch|مبدّل افتراضي
ressourcenzuweisung|تخصيص الموارد
ressourcenpool|مجموعة موارد
überbuchung|تخصيص موارد يتجاوز المتاح فعليًا
hardwareunterstützung|دعم عتادي
paravirtualisierung|افتراضية شبه كاملة
vollvirtualisierung|افتراضية كاملة
containervirtualisierung|افتراضية بالحاويات
containerabbild|صورة حاوية
containerinstanz|نسخة حاوية عاملة
containerlaufzeit|بيئة تشغيل الحاويات
orchestrierung|تنسيق الحاويات
mandantenfähigkeit|دعم تعدد المستأجرين
mandantentrennung|فصل المستأجرين
cloud-bereitstellungsmodell|نموذج نشر سحابي
öffentliche cloud|سحابة عامة
private cloud|سحابة خاصة
hybride cloud|سحابة هجينة
gemeinschaftscloud|سحابة مجتمعية
infrastruktur als dienst|البنية التحتية كخدمة
plattform als dienst|المنصة كخدمة
software als dienst|البرمجيات كخدمة
bedarfsgerechte skalierung|توسعة وفق الحاجة
horizontale skalierung|توسعة أفقية
vertikale skalierung|توسعة رأسية
elastische skalierung|توسعة مرنة
automatische skalierung|توسعة تلقائية
ressourcenbereitstellung|توفير الموارد
nutzungsabhängige abrechnung|فوترة حسب الاستخدام
dienstgütevereinbarung|اتفاقية مستوى الخدمة
vereinbarte verfügbarkeit|التوافر المتفق عليه
cloud-region|منطقة سحابية
verfügbarkeitszone|نطاق توافر
objektspeicher|تخزين كائني
blockspeicher|تخزين كتلي
dateispeicher|تخزين ملفي
speichernetzwerk|شبكة تخزين
netzwerkspeicher|تخزين متصل بالشبكة
festplattenverbund|مصفوفة أقراص
spiegelung|نسخ متطابق
paritätsinformation|معلومة التكافؤ
hot-spare-laufwerk|قرص احتياطي جاهز
wiederaufbau|إعادة بناء المصفوفة
degradierter zustand|حالة منخفضة الاعتمادية
ausgefallenes laufwerk|قرص معطل
datenbankverwaltung|إدارة قاعدة البيانات
datenbankmanagementsystem|نظام إدارة قاعدة بيانات
datenbankserver|خادم قاعدة بيانات
datenbankentwurf|تصميم قاعدة البيانات
datenbankschema|مخطط قاعدة البيانات
datenbankmodell|نموذج قاعدة البيانات
relationales datenmodell|نموذج بيانات علائقي
entitätsmenge|مجموعة كيانات
beziehungstyp|نوع العلاقة
beziehungsmenge|مجموعة العلاقات
attributwert|قيمة السمة
schlüsselattribut|سمة مفتاحية
zusammengesetzter schlüssel|مفتاح مركب
kandidatenschlüssel|مفتاح مرشح
ersatzschlüssel|مفتاح بديل اصطناعي
referenzielle integrität|سلامة المراجع
integritätsbedingung|قيد سلامة البيانات
eindeutigkeitsbedingung|قيد التفرد
nullwert|قيمة فارغة
normalisierung|تطبيع قاعدة البيانات
erste normalform|الصيغة الطبيعية الأولى
zweite normalform|الصيغة الطبيعية الثانية
dritte normalform|الصيغة الطبيعية الثالثة
funktionale abhängigkeit|تبعية وظيفية
transitive abhängigkeit|تبعية انتقالية
einfügeanomalie|شذوذ الإدراج
änderungsanomalie|شذوذ التعديل
löschanomalie|شذوذ الحذف
datenbanktransaktion|معاملة قاعدة بيانات
transaktionssicherheit|سلامة المعاملات
atomarität|الذرية
konsistenz|الاتساق
isolation|العزل
dauerhaftigkeit|الديمومة
transaktionsprotokoll|سجل المعاملات
sperrverfahren|آلية القفل
gleichzeitiger zugriff|وصول متزامن
leseanomalie|شذوذ القراءة
abfrageoptimierung|تحسين الاستعلام
ausführungsplan|خطة التنفيذ
tabellenindex|فهرس جدول
vollständiger tabellenscan|مسح كامل للجدول
verbundoperation|عملية ربط الجداول
innerer verbund|ربط داخلي
äußerer verbund|ربط خارجي
gruppierungsfunktion|دالة تجميع
aggregatfunktion|دالة تجميع حسابية
unterabfrage|استعلام فرعي
gespeicherte prozedur|إجراء مخزن
datenbanksicht|عرض قاعدة بيانات
datensatz|سجل بيانات
datenfeld|حقل بيانات
datenbestand|مجموعة البيانات
datenhaltung|حفظ وإدارة البيانات
datenverarbeitung|معالجة البيانات
datenübertragung|نقل البيانات
datenaustausch|تبادل البيانات
datenformat|تنسيق البيانات
datenstruktur|بنية البيانات
datenmodellierung|نمذجة البيانات
datenerfassung|جمع البيانات
datenbereinigung|تنظيف البيانات
datenvalidierung|التحقق من صحة البيانات
datenkonsistenz|اتساق البيانات
datenqualität|جودة البيانات
datenredundanz|تكرار البيانات
datenmigration|ترحيل البيانات
datenimport|استيراد البيانات
datenexport|تصدير البيانات
programmentwicklung|تطوير البرامج
softwareentwicklung|تطوير البرمجيات
entwicklungsprozess|عملية التطوير
vorgehensmodell|نموذج منهجية العمل
anforderungserhebung|جمع المتطلبات
fachkonzept|تصور وظيفي
technisches konzept|تصور تقني
systementwurf|تصميم النظام
implementierung|تنفيذ برمجي
quellcodeverwaltung|إدارة الشيفرة المصدرية
versionsverwaltung|إدارة الإصدارات
versionsstand|حالة الإصدار
änderungsverfolgung|تتبع التغييرات
entwicklungszweig|فرع تطوير
hauptzweig|الفرع الرئيسي
zusammenführung|دمج
zusammenführungskonflikt|تعارض دمج
codeüberprüfung|مراجعة الشيفرة
codequalität|جودة الشيفرة
programmierrichtlinie|قاعدة أسلوب البرمجة
namenskonvention|اصطلاح التسمية
fehlerbehandlung|معالجة الأخطاء
ausnahmebehandlung|معالجة الاستثناءات
ausnahmezustand|حالة استثنائية
fehlermeldung|رسالة خطأ
rückgabecode|رمز الإرجاع
eingabeprüfung|التحقق من المدخلات
grenzwertprüfung|فحص القيم الحدية
datentyp|نوع بيانات
typumwandlung|تحويل النوع
variablendeklaration|تعريف متغير
variableninitialisierung|تهيئة متغير
gültigkeitsbereich|نطاق الصلاحية
kontrollstruktur|بنية تحكم
verzweigung|تفرع شرطي
schleifenbedingung|شرط الحلقة
abbruchbedingung|شرط الإنهاء
endlosschleife|حلقة لا نهائية
funktionsparameter|معامل الدالة
übergabeparameter|معامل تمرير
rückgabewert|قيمة الإرجاع
methodenaufruf|استدعاء طريقة
methodenüberladung|تحميل زائد للطرق
objektinstanz|نسخة كائن
objekterzeugung|إنشاء كائن
klassenvariable|متغير صنفي
instanzvariable|متغير كائن
zugriffsmethode|طريقة وصول
datenkapselung in klassen|تغليف البيانات داخل الأصناف
vererbungshierarchie|تسلسل وراثة الأصناف
schnittstellenimplementierung|تنفيذ واجهة برمجية
abstrakte klasse|صنف مجرد
überschriebene methode|طريقة معاد تعريفها
testverfahren|إجراء اختبار
testfall|حالة اختبار
testdaten|بيانات اختبار
testergebnis|نتيجة اختبار
testabdeckung|تغطية الاختبارات
einzeltest|اختبار وحدة
integrationstest|اختبار تكامل
systemtest|اختبار نظام
abnahmetest|اختبار قبول
regressionstest|اختبار انحدار
funktionstest|اختبار وظيفي
lasttest|اختبار حمل
stresstest|اختبار إجهاد
testautomatisierung|أتمتة الاختبار
fehlernachstellung|إعادة إنتاج الخطأ
fehlerkorrektur|تصحيح الخطأ
fehlerverfolgung|تتبع الأخطاء
hardwarekomponente|مكوّن عتادي
hauptplatine|اللوحة الأم
prozessorsockel|مقبس المعالج
prozessortakt|تردد المعالج
taktfrequenz|تردد الساعة
prozessorkern|نواة المعالج
rechenwerk|وحدة الحساب والمنطق
steuerwerk|وحدة التحكم
registersatz|مجموعة السجلات
zwischenspeicher|ذاكرة مؤقتة
cache-hierarchie|تسلسل الذاكرة المخبأة
hauptspeicher|الذاكرة الرئيسية
arbeitsspeichermodul|وحدة ذاكرة RAM
speicherkanal|قناة الذاكرة
speicherlatenz|زمن تأخير الذاكرة
fehlerkorrekturspeicher|ذاكرة بتصحيح الأخطاء
massenspeicher|وسيط تخزين دائم
festplattenlaufwerk|قرص صلب مغناطيسي
halbleiterlaufwerk|قرص حالة صلبة
zugriffszeit|زمن الوصول
lesegeschwindigkeit|سرعة القراءة
schreibgeschwindigkeit|سرعة الكتابة
eingabeausgabegerät|جهاز إدخال وإخراج
peripheriegerät|جهاز طرفي
erweiterungssteckplatz|شق توسعة
erweiterungskarte|بطاقة توسعة
grafikprozessor|معالج رسومي
netzteil|مزود طاقة
nennleistung|القدرة الاسمية
wirkungsgrad|الكفاءة
leistungsaufnahme|استهلاك القدرة
wärmeentwicklung|تولد الحرارة
wärmeleitpaste|معجون حراري
kühlkörper|مشتت حراري
lüftersteuerung|التحكم في المروحة
betriebstemperatur|درجة حرارة التشغيل
firmwareaktualisierung|تحديث البرنامج الثابت
startreihenfolge|ترتيب الإقلاع
selbsttest beim einschalten|اختبار ذاتي عند التشغيل
startdatenträger|وسيط الإقلاع
startprogramm|برنامج الإقلاع
startvorgang|عملية الإقلاع
hardwareerkennung|اكتشاف العتاد
gerätetreiberinstallation|تثبيت برنامج تشغيل الجهاز
treiberkompatibilität|توافق برنامج التشغيل
kompatibilitätsprüfung|فحص التوافق
fehlerbehebung|استكشاف الأخطاء وإصلاحها
systematische fehlersuche|بحث منهجي عن الخطأ
fehler eingrenzen|تضييق نطاق الخطأ
ursache ermitteln|تحديد السبب
symptom erfassen|تسجيل العَرَض
ist-zustand aufnehmen|توثيق الوضع الحالي
änderung nachvollziehen|تتبع التغيير وفهمه
hypothese aufstellen|وضع فرضية
hypothese überprüfen|اختبار الفرضية
lösung testen|اختبار الحل
funktion prüfen|فحص الوظيفة
ergebnis dokumentieren|توثيق النتيجة
störung beheben|إصلاح العطل
dienst wiederherstellen|استعادة الخدمة
ersatzgerät|جهاز بديل
ersatzteil|قطعة غيار
wartungsfenster|نافذة صيانة
wartungsarbeit|عمل صيانة
wartungsplan|خطة صيانة
instandhaltung|صيانة وحفظ الجاهزية
instandsetzung|إصلاح وإعادة الجاهزية
inspektion|فحص دوري
präventive wartung|صيانة وقائية
fernwartung|صيانة عن بعد
vor-ort-support|دعم في الموقع
störungsticket|تذكرة عطل
supportanfrage|طلب دعم
serviceanfrage|طلب خدمة
bearbeitungsnummer|رقم المعالجة
prioritätsstufe|مستوى الأولوية
auswirkungsgrad|درجة التأثير
dringlichkeitsstufe|مستوى الاستعجال
erstlösungsquote|نسبة الحل من أول تواصل
lösungszeit|زمن الحل
servicekatalog|كتالوج الخدمات
dienstleistungsvereinbarung|اتفاقية خدمة
verfügbarkeitszusage|التزام بالتوافر
rechenzentrum|مركز بيانات
serverraum|غرفة خوادم
serverschrank|خزانة خوادم
rackeinheit|وحدة ارتفاع في الخزانة
kabelmanagement|تنظيم الكابلات
stromkreis|دائرة كهربائية
potentialausgleich|موازنة الجهد الكهربائي
erdung|تأريض
klimatisierung|تكييف الهواء
luftfeuchtigkeit|رطوبة الهواء
brandmeldeanlage|نظام إنذار حريق
löschanlage|نظام إطفاء
zutrittsberechtigung|صلاحية دخول مادي
betriebsdokumentation|توثيق التشغيل
systemdokumentation|توثيق النظام
netzwerkdokumentation|توثيق الشبكة
installationsanleitung|دليل التثبيت
betriebsanleitung|دليل التشغيل
benutzerdokumentation|توثيق المستخدم
änderungsdokumentation|توثيق التغييرات
konfigurationsdokumentation|توثيق الإعدادات
notfalldokumentation|توثيق الطوارئ
abnahmeprotokoll|محضر الاستلام
übergabeprotokoll|محضر التسليم
prüfprotokoll|محضر الفحص
messprotokoll|سجل القياسات
inventarverzeichnis|سجل الجرد
inventarnummer|رقم الجرد
lizenzverwaltung|إدارة التراخيص
lizenzmodell|نموذج الترخيص
nutzungsrecht|حق الاستخدام
einzelplatzlizenz|ترخيص لجهاز واحد
volumenlizenz|ترخيص جماعي
freie software|برمجيات حرة
quelloffene software|برمجيات مفتوحة المصدر
proprietäre software|برمجيات احتكارية
lizenzbedingung|شرط ترخيص
lizenzverstoß|مخالفة الترخيص
softwareverteilung|توزيع البرمجيات
paketverwaltung|إدارة الحزم
paketquelle|مصدر الحزم
paketabhängigkeit|تبعية الحزمة
versionskonflikt|تعارض الإصدارات
aktualisierungsverwaltung|إدارة التحديثات
sicherheitsaktualisierung|تحديث أمني
funktionsaktualisierung|تحديث ميزات
wartungsstand|مستوى التحديث والصيانة
lebenszyklus|دورة الحياة
produktlebenszyklus|دورة حياة المنتج
unterstützungszeitraum|فترة الدعم
abgekündigte version|إصدار انتهى دعمه
migrationsplanung|تخطيط الترحيل
migrationsschritt|خطوة ترحيل
rückfallplan|خطة رجوع
parallelbetrieb|تشغيل متوازٍ
pilotbetrieb|تشغيل تجريبي
produktivbetrieb|تشغيل فعلي
testumgebung|بيئة اختبار
entwicklungsumgebung|بيئة تطوير
produktionsumgebung|بيئة إنتاج
abnahmeumgebung|بيئة قبول
konfigurationsänderung|تغيير إعداد
änderungsantrag|طلب تغيير
änderungsfreigabe|موافقة على التغيير
änderungsrisiko|مخاطر التغيير
auswirkungsanalyse|تحليل الأثر
versionswechsel|تغيير الإصدار
rollout-plan|خطة النشر
bereitstellungsprozess|عملية النشر والإتاحة
automatisierte bereitstellung|نشر آلي
rückgängigmachung|تراجع عن التغيير
erfolgsprüfung|التحقق من النجاح
projektplanung|تخطيط المشروع
projektauftrag|تكليف المشروع
projektziel|هدف المشروع
projektumfang|نطاق المشروع
projektphase|مرحلة المشروع
projektstrukturplan|هيكل تجزئة المشروع
arbeitspaket|حزمة عمل
meilenstein|مرحلة رئيسية
zeitplanung|تخطيط الوقت
terminplanung|تخطيط المواعيد
ressourcenplanung|تخطيط الموارد
kostenplanung|تخطيط التكاليف
projektkosten|تكاليف المشروع
projektbudget|ميزانية المشروع
kostenabweichung|انحراف التكاليف
terminabweichung|انحراف الجدول الزمني
projektfortschritt|تقدم المشروع
fortschrittskontrolle|مراقبة التقدم
projektrisiko|مخاطر المشروع
risikoregister|سجل المخاطر
projektbeteiligter|صاحب مصلحة في المشروع
interessengruppe|مجموعة أصحاب المصلحة
kommunikationsplan|خطة التواصل
statusbericht|تقرير الحالة
projektabschluss|إغلاق المشروع
ergebnisabnahme|قبول النتيجة
nachkalkulation|حساب التكاليف اللاحق
erfahrungsrückblick|مراجعة الدروس المستفادة
kosten-nutzen-analyse|تحليل التكلفة والمنفعة
nutzwertanalyse|تحليل المنفعة بالنقاط
amortisationsdauer|مدة استرداد الاستثمار
kapitalwert|القيمة الرأسمالية
gesamtkostenbetrachtung|تحليل التكلفة الكلية
eigenfertigung|إنتاج داخلي
fremdbezug|شراء خارجي
mietmodell|نموذج إيجار
kaufmodell|نموذج شراء
finanzierungsleasing|تأجير تمويلي
betriebliches leasing|تأجير تشغيلي
angebote vergleichen|مقارنة العروض
entscheidung begründen|تعليل القرار
anforderungen gewichten|ترجيح المتطلبات
kriterien bewerten|تقييم المعايير
punkte vergeben|منح النقاط
gesamtpunktzahl ermitteln|حساب مجموع النقاط
wirtschaftliche lösung|حل اقتصادي
technisch geeignete lösung|حل ملائم تقنيًا
administration|إدارة الأنظمة
anbindung|ربط / اتصال
einrichtung|إعداد / تجهيز
bezeichnung|تسمية
erweiterung|توسعة
darstellung|تمثيل / عرض
fortsetzung|متابعة / تتمة
vorbereitung|تحضير
aktivität|نشاط
kardinalität|درجة العلاقة بين الكيانات
leitungssystem|نظام إداري هرمي
einführung|مقدمة / إدخال
schreibweise|طريقة الكتابة
skalierung|توسعة الحجم أو القدرة
situation|حالة / موقف
bearbeitung|معالجة / إنجاز
deklaration|تصريح برمجي
dokumentation|توثيق
erstellung|إنشاء
anschaffung|اقتناء
funktionsweise|آلية العمل
weiterleitung|إعادة توجيه
bedienung|تشغيل / استخدام
individualversicherung|تأمين فردي
beschäftigung|توظيف
textverarbeitung|معالجة النصوص
archivierung|أرشفة
identität|هوية
berufsausbildung|تدريب مهني
organisation|تنظيم / مؤسسة
zuweisung|إسناد / تخصيص
energiekosten|تكاليف الطاقة
aggregation|تجميع
spedition|شركة شحن ونقل
protokollierung|تسجيل الأحداث
umstellung|تحويل / تغيير النظام
synchronisation|مزامنة
internetanbindung|اتصال بالإنترنت
versorgung|إمداد
arbeitslosigkeit|بطالة
lieferung|تسليم
konzeption|تصميم مفاهيمي
speicherbelegung|إشغال الذاكرة
abkürzung|اختصار
fehlerbeseitigung|إزالة الخطأ
parallelschaltung|توصيل على التوازي
scheinleistung|القدرة الظاهرية
weisungsbefugnis|صلاحية إصدار التعليمات
rechenleistung|قدرة المعالجة
festlegung|تحديد ملزم
funktionalität|وظيفة / مجموعة وظائف
aktivierung|تفعيل
umrechnung|تحويل حسابي
versicherung|تأمين
tastenkombination|اختصار لوحة المفاتيح
reihenschaltung|توصيل على التوالي
rechtsabteilung|القسم القانوني
businessplan|خطة عمل
abbildung|رسم توضيحي
tätigkeit|نشاط وظيفي
kombination|تركيب / دمج
deaktivierung|تعطيل
beschriftung|تسمية توضيحية
veränderung|تغيير
firmennetz|شبكة الشركة
ablehnung|رفض
betriebszeit|وقت التشغيل
anweisung|تعليمة / توجيه
verflechtung|تشابك / ترابط
eintragung|تسجيل / قيد
arbeitsniederlegung|توقف عن العمل / إضراب
solidarität|تضامن
auszubildendenvertretung|هيئة تمثيل المتدربين
vermeidung|تجنب
abrechnung|فوترة / كشف حساب
anpassung|تكييف / ضبط
gewichtung|ترجيح
produktionsdaten|بيانات الإنتاج
reduzierung|تقليل
verbesserung|تحسين
identifizierung|تحديد الهوية
verteilung|توزيع
unternehmung|منشأة / مشروع اقتصادي
fachrichtung|تخصص مهني
auslastung|نسبة الاستخدام
beendigung|إنهاء
einstellung|إعداد / توظيف
stabilität|استقرار
schaltung|دائرة كهربائية
beteiligung|مشاركة / حصة
matrixsystem|نظام مصفوفي
schließung|إغلاق
patientendaten|بيانات المرضى
nettokapazität|السعة الصافية
empfehlung|توصية
speichersystem|نظام تخزين
beachtung|مراعاة
einordnung|تصنيف / وضع في السياق
internetverbindung|اتصال بالإنترنت
serverüberwachung|مراقبة الخادم
lastverteilung|توزيع الحمل
verringerung|خفض
notfallwiederherstellung|استعادة بعد الطوارئ
ladungsstand|مستوى الشحن
wirkleistung|القدرة الفعلية
restladung|الشحنة المتبقية
metadaten|بيانات وصفية
selbstaktion|إجراء ذاتي
komposition|تركيب / تكوين
dosierung|تحديد الجرعة
zuordnungseinheit|وحدة تخصيص
rationalisierung|ترشيد العمليات
versicherungsvertrag|عقد تأمين
doppelunterstellung|تبعية إدارية مزدوجة
landwirtschaft|قطاع الزراعة
fertigung|تصنيع
einzelarbeitsvertrag|عقد عمل فردي
fortbildung|تدريب مهني متقدم
existenzsicherung|ضمان سبل المعيشة
warnmeldung|رسالة تحذير
durchführung|تنفيذ
erfahrung|خبرة
spezialisierung|تخصص
platzbedarf|المساحة المطلوبة
vermittlung|وساطة / إحالة
eigenentwicklung|تطوير داخلي
kennzeichnung|وسم / تمييز
berücksichtigung|مراعاة
formulierung|صياغة
betriebsdaten|بيانات التشغيل
zertifizierungsstelle|جهة إصدار الشهادات
systemkompromittierung|اختراق النظام
kapazitätsauslastung|استغلال السعة
containerisierung|استخدام الحاويات
wertebereich|نطاق القيم
ausgangsleistung|قدرة الخرج
bestellposition|بند طلب الشراء
beseitigung|إزالة
erkennung|اكتشاف
tagesordnung|جدول الأعمال
offenheit|انفتاح / شفافية
gesellschaftsvertrag|عقد تأسيس الشركة
beschäftigungsstand|مستوى التوظيف
förderung|دعم / تشجيع
krankheit|مرض
gehaltserhöhung|زيادة الراتب
gesundheit|صحة
arbeitsgemeinschaft|اتحاد عمل / مجموعة عمل
unternehmensverbindung|ارتباط بين الشركات
arbeitsunfähigkeit|عجز عن العمل
anwendungsentwicklung|تطوير التطبيقات
weiterbildung|تعليم مهني مستمر
eigenkapitalrentabilität|عائد حقوق الملكية
arbeitszeugnis|شهادة خبرة وظيفية
umweltschutz|حماية البيئة
wahlrecht|حق التصويت
`.trim().split('\n')

export const dictionaryExpansion: Record<string, string> = Object.freeze(
  Object.fromEntries(rows.map((row) => {
    const separator = row.indexOf('|')
    if (separator <= 0 || separator === row.length - 1) throw new Error(`Malformed dictionary row: ${row}`)
    return [row.slice(0, separator), row.slice(separator + 1)]
  })),
)
