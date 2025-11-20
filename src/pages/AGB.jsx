import React from "react";
import { Link } from "react-router-dom";
import Container from "../components/Container";
import GradientBar from "../components/GradientBar";

export default function AGB() {
  return (
    <Container as="main" role="main" aria-labelledby="agb-title">
      <h1 id="agb-title" className="text-3xl md:text-4xl font-semibold">Allgemeine Geschäftsbedingungen (AGB)</h1>
      <GradientBar />
      <article className="prose prose-slate max-w-none">
        <p><strong>Hinweis:</strong> Dies ist ein Platzhaltertext für die AGB. Er sollte vor Veröffentlichung durch gültige, rechtlich geprüfte Inhalte ersetzt werden.</p>

        <h2>1. Geltungsbereich</h2>
        <p>Diese Allgemeinen Geschäftsbedingungen (AGB) gelten für alle Verträge zwischen MediCoat Solutions ("wir") und unseren Kunden ("Sie"), soweit nicht ausdrücklich abweichende schriftliche Vereinbarungen getroffen wurden.</p>

        <h2>2. Vertragsabschluss</h2>
        <p>Unsere Angebote sind freibleibend und unverbindlich. Ein Vertrag kommt erst durch unsere schriftliche Auftragsbestätigung oder durch Ausführung der Leistung zustande.</p>

        <h2>3. Leistungen</h2>
        <p>Wir erbringen Dienstleistungen rund um PVD-Beschichtungen, Oberflächenoptimierung sowie technische und strategische Beratung gemäß der jeweils vereinbarten Leistungsbeschreibung.</p>

        <h2>4. Preise und Zahlung</h2>
        <p>Alle Preise verstehen sich netto zuzüglich der gesetzlichen Umsatzsteuer. Rechnungen sind zahlbar innerhalb von 14 Tagen ohne Abzug, sofern nichts anderes vereinbart wurde.</p>

        <h2>5. Mitwirkungspflichten des Kunden</h2>
        <p>Sie stellen sicher, dass uns alle für die Auftragserfüllung notwendigen Informationen und Bauteile rechtzeitig und in geeigneter Qualität zur Verfügung stehen.</p>

        <h2>6. Liefer- und Leistungszeit</h2>
        <p>Leistungs- und Liefertermine sind unverbindlich, sofern sie nicht ausdrücklich schriftlich als verbindlich zugesagt wurden. Höhere Gewalt und vergleichbare Ereignisse verlängern Fristen angemessen.</p>

        <h2>7. Gewährleistung</h2>
        <p>Etwaige Mängel sind uns unverzüglich schriftlich anzuzeigen. Bei berechtigten Mängelrügen leisten wir nach unserer Wahl Nachbesserung oder Ersatzlieferung. Weitergehende Ansprüche sind ausgeschlossen, soweit gesetzlich zulässig.</p>

        <h2>8. Haftung</h2>
        <p>Wir haften nur für Vorsatz und grobe Fahrlässigkeit sowie für die Verletzung wesentlicher Vertragspflichten. Bei leicht fahrlässiger Verletzung wesentlicher Pflichten ist die Haftung auf den typischerweise vorhersehbaren Schaden begrenzt.</p>

        <h2>9. Geheimhaltung</h2>
        <p>Beide Parteien behandeln vertrauliche Informationen, die im Rahmen der Zusammenarbeit erlangt werden, streng vertraulich und verwenden diese ausschließlich zur Vertragserfüllung.</p>

        <h2>10. Eigentumsvorbehalt / Nutzungsrechte</h2>
        <p>Gelieferte Produkte bleiben bis zur vollständigen Zahlung unser Eigentum. An von uns bereitgestellten Konzepten und technischen Unterlagen verbleiben sämtliche Rechte bei uns, sofern nicht anders vereinbart.</p>

        <h2>11. Abnahme</h2>
        <p>Sofern eine Abnahme vereinbart ist, gilt die Leistung als abgenommen, wenn Sie sie innerhalb von 7 Tagen nach Anzeige nicht unter konkreter Mängelbezeichnung schriftlich rügen.</p>

        <h2>12. Datenschutz</h2>
        <p>Die Verarbeitung personenbezogener Daten erfolgt gemäß unserer <Link to="/datenschutz">Datenschutzerklärung</Link>.</p>

        <h2>13. Gerichtsstand und anwendbares Recht</h2>
        <p>Es gilt das Recht der Bundesrepublik Deutschland unter Ausschluss des UN-Kaufrechts. Gerichtsstand ist – soweit zulässig – unser Sitz.</p>

        <h2>14. Salvatorische Klausel</h2>
        <p>Sollte eine Bestimmung dieser AGB unwirksam sein oder werden, bleibt die Wirksamkeit der übrigen Bestimmungen unberührt. Anstelle der unwirksamen Bestimmung gilt eine Regelung, die dem wirtschaftlichen Zweck am nächsten kommt.</p>

        <h2>15. Aktualisierung</h2>
        <p>Diese AGB sind ein vorläufiger Platzhalter. Bitte ersetzen Sie die Inhalte durch eine endgültige, rechtlich geprüfte Version und fügen Sie Versions- und Datumsstand hinzu.</p>

        <p className="text-sm text-slate-500">Stand: Platzhalter – noch nicht rechtsverbindlich.</p>
      </article>
    </Container>
  );
}