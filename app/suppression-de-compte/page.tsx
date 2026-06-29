import type { Metadata } from "next";
import { Header } from "@/components/header";
import { Footer } from "@/components/footer";
import { Section } from "@/components/site/section";
import { Container } from "@/components/site/container";
import { Eyebrow } from "@/components/site/eyebrow";
import { Reveal } from "@/components/site/reveal";
import { PhoneFrame } from "@/components/site/phone-frame";

/* ------------------------------------------------------------------ *
 *  Account & data deletion page — the URL referenced from the OVRIA
 *  Google Play store listing (Play Console “Data deletion” requirement).
 *  It must: (1) name the app / developer, (2) prominently show the steps
 *  to request account deletion, and (3) state which data is deleted vs.
 *  retained, with retention periods.
 *
 *  MOCKUP: the company details and retention periods below are realistic
 *  but illustrative — have them reviewed by counsel and replace the
 *  COMPANY values with OVRIA’s real information before going live.
 * ------------------------------------------------------------------ */

const TITLE = "Suppression de compte";
const LAST_UPDATED = "29 juin 2026";
const DESCRIPTION =
  "Comment supprimer votre compte OVRIA et demander l’effacement de vos données personnelles, depuis l’application ou par e-mail. Données supprimées, données conservées et durées de conservation.";

export const metadata: Metadata = {
  title: `${TITLE} — OVRIA`,
  description: DESCRIPTION,
  // Live page referenced from the Google Play store listing — indexable so
  // it is publicly reachable. Confirm the COMPANY values and retention
  // periods below are accurate before relying on it for compliance.
  robots: { index: true, follow: true },
};

/* Sample/mock company details for the demo — replace with OVRIA’s real
   legal information before going live. */
const COMPANY = {
  appName: "OVRIA",
  developerName: "OVRIA SAS",
  contactEmail: "contact@ovria.fr",
  dpoEmail: "dpo@ovria.fr",
  // Max. processing time for a deletion request.
  processingDays: 30,
};

type Step = {
  title: string;
  detail: string;
};

/* Prominent, numbered steps to request account deletion — these match the
   in-app screen shown alongside (Settings › Account › Delete account). The
   labels appear in your app’s language; the French equivalents are noted in
   parentheses. */
const IN_APP_STEPS: Step[] = [
  {
    title: "Ouvrez les réglages d’OVRIA",
    detail:
      "Connectez-vous à l’application OVRIA (iOS ou Android), puis ouvrez l’écran « Settings » (Réglages).",
  },
  {
    title: "Accédez à la section « Account »",
    detail:
      "Faites défiler jusqu’à la section « Account » (Compte), en bas de l’écran des réglages.",
  },
  {
    title: "Appuyez sur « Delete account »",
    detail:
      "Sélectionnez « Delete account » (Supprimer le compte), affiché en rouge sous votre adresse e-mail.",
  },
  {
    title: "Confirmez la suppression",
    detail:
      "Suivez l’écran de confirmation pour valider. Votre demande est alors enregistrée et votre compte désactivé immédiatement.",
  },
];

type Block =
  | { kind: "p"; text: string }
  | { kind: "ul"; items: string[] };

type DeletionSection = {
  id: string;
  heading: string;
  blocks: Block[];
};

const SECTIONS: DeletionSection[] = [
  {
    id: "par-email",
    heading: "Supprimer votre compte par e-mail",
    blocks: [
      {
        kind: "p",
        text: `Si vous n’avez plus accès à l’application, vous pouvez demander la suppression de votre compte par e-mail. Écrivez à ${COMPANY.contactEmail} depuis l’adresse e-mail associée à votre compte ${COMPANY.appName}, avec pour objet « Suppression de compte ».`,
      },
      {
        kind: "p",
        text: "Afin de protéger votre compte, nous pouvons vous demander de confirmer votre identité avant de traiter la demande. Cette vérification nous évite de supprimer un compte à la demande d’un tiers.",
      },
    ],
  },
  {
    id: "delai",
    heading: "Délai de traitement",
    blocks: [
      {
        kind: "p",
        text: `Votre demande est traitée dans un délai maximum de ${COMPANY.processingDays} jours. Vous recevez une confirmation par e-mail une fois la suppression effectuée. Tant que la suppression n’est pas finalisée, votre compte est désactivé et n’est plus visible des autres utilisateurs.`,
      },
    ],
  },
  {
    id: "donnees-supprimees",
    heading: "Données supprimées",
    blocks: [
      {
        kind: "p",
        text: "Lorsque votre compte est supprimé, nous effaçons ou anonymisons les données personnelles associées, notamment :",
      },
      {
        kind: "ul",
        items: [
          "Vos données d’identification : nom, prénom, adresse e-mail, numéro de téléphone et mot de passe.",
          "Votre profil : métier et spécialité, qualifications, expérience, disponibilité, zone d’intervention et photo de profil (ouvriers) ; raison sociale, SIRET et coordonnées du contact (entreprises).",
          "Le contenu généré sur la plateforme : candidatures, offres, messages échangés et mises en relation.",
          "Vos préférences de compte et données de localisation.",
        ],
      },
    ],
  },
  {
    id: "donnees-conservees",
    heading: "Données conservées et durées de conservation",
    blocks: [
      {
        kind: "p",
        text: "Certaines données peuvent être conservées au-delà de la suppression du compte, uniquement lorsque la loi l’exige ou pour la constatation, l’exercice ou la défense d’un droit. Elles sont alors isolées et leur accès restreint :",
      },
      {
        kind: "ul",
        items: [
          "Données comptables et de facturation : conservées jusqu’à 10 ans, conformément aux obligations légales et fiscales (Code de commerce).",
          "Données de connexion (journaux techniques) : conservées jusqu’à 12 mois, conformément à la réglementation applicable.",
          "Données strictement nécessaires à la gestion d’un litige : conservées jusqu’au terme des délais de prescription applicables.",
          "Données rendues anonymes (statistiques d’usage agrégées) : conservées sans limitation de durée, car elles ne permettent plus de vous identifier.",
        ],
      },
      {
        kind: "p",
        text: "À l’expiration de ces durées, les données sont supprimées ou définitivement anonymisées.",
      },
    ],
  },
  {
    id: "contact",
    heading: "Une question ?",
    blocks: [
      {
        kind: "p",
        text: `Pour toute question sur la suppression de votre compte ou le traitement de vos données, écrivez-nous à ${COMPANY.contactEmail} (délégué à la protection des données : ${COMPANY.dpoEmail}). Pour en savoir plus sur l’usage de vos données, consultez notre politique de confidentialité.`,
      },
    ],
  },
];

export default function AccountDeletionPage() {
  return (
    <>
      <Header />
      <main>
        <Section>
          <Container>
            <Reveal className="measure">
              <Eyebrow>Légal</Eyebrow>
              <h1 className="t-display-l mt-4 text-ink">{TITLE}</h1>
              <p className="t-lead mt-6 text-ink-2">
                Cette page explique comment supprimer votre compte{" "}
                {COMPANY.appName}, édité par {COMPANY.developerName}, et demander
                l’effacement de vos données personnelles. La suppression peut
                être effectuée directement depuis l’application {COMPANY.appName}{" "}
                (iOS et Android) ou par e-mail.
              </p>
              <p className="t-caption mt-4 text-off">
                Dernière mise à jour : {LAST_UPDATED}
              </p>
            </Reveal>

            {/* Prominent steps — the core Google Play requirement. */}
            <Reveal delay={60} className="mt-12">
              <div className="rounded-card border border-hairline bg-surface p-6 md:p-8">
                <h2 className="t-display-m text-ink">
                  Supprimer votre compte depuis l’application
                </h2>
                <div className="mt-6 grid gap-8 md:grid-cols-[1fr_minmax(0,240px)] md:items-start md:gap-10">
                  <ol className="space-y-5">
                    {IN_APP_STEPS.map((step, i) => (
                      <li key={i} className="flex gap-4">
                        <span
                          aria-hidden
                          className="flex size-7 shrink-0 items-center justify-center rounded-pill border border-hairline t-caption font-medium text-ink"
                        >
                          {i + 1}
                        </span>
                        <div>
                          <p className="t-body font-medium text-ink">
                            {step.title}
                          </p>
                          <p className="t-body-sm mt-1 text-ink-2">
                            {step.detail}
                          </p>
                        </div>
                      </li>
                    ))}
                  </ol>
                  <figure className="mx-auto w-full max-w-[240px] md:mx-0">
                    <PhoneFrame
                      src="/screens/reglages-suppression-compte.png"
                      alt="Écran Réglages de l’application OVRIA : la section « Account » contient l’option « Delete account » (Supprimer le compte) en rouge."
                    />
                    <figcaption className="t-caption mt-3 text-center text-off md:text-start">
                      L’option « Delete account » dans les réglages de l’app
                      OVRIA.
                    </figcaption>
                  </figure>
                </div>
              </div>
            </Reveal>

            <Reveal delay={100} className="measure mt-12 space-y-10">
              {SECTIONS.map((section) => (
                <section
                  key={section.id}
                  id={section.id}
                  className="scroll-mt-24"
                >
                  <h2 className="t-display-m text-ink">{section.heading}</h2>
                  {section.blocks.map((block, i) =>
                    block.kind === "p" ? (
                      <p key={i} className="t-body mt-4 text-ink-2">
                        {block.text}
                      </p>
                    ) : (
                      <ul
                        key={i}
                        className="mt-4 space-y-2 ps-5 t-body text-ink-2 [&>li]:list-disc [&>li]:marker:text-off"
                      >
                        {block.items.map((item, j) => (
                          <li key={j}>{item}</li>
                        ))}
                      </ul>
                    ),
                  )}
                </section>
              ))}
            </Reveal>
          </Container>
        </Section>
      </main>
      <Footer />
    </>
  );
}
