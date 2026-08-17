import type { Metadata } from "next";
import {
  LegalPage,
  type LegalSection,
} from "@/components/site/legal-page";
import { COMPANY, LEGAL_VERSION_DATE } from "@/lib/company";

/* Text supplied by the client — see docs/legal/cgv.docx. Transcribed verbatim;
   edit the source document, not this file, when the legal wording changes. */

const TITLE = "Conditions générales de vente";
const DESCRIPTION =
  "Conditions de souscription, d’utilisation et de paiement des abonnements professionnels OVRIA : tarifs, abonnements mensuel et annuel, impayés, résiliation et responsabilité.";

export const metadata: Metadata = {
  title: `${TITLE} (CGV) — OVRIA`,
  description: DESCRIPTION,
  alternates: { canonical: "/cgv" },
};

const SECTIONS: LegalSection[] = [
  {
    id: "objet",
    heading: "Article 1 – Objet",
    blocks: [
      {
        kind: "p",
        text: "Les présentes Conditions Générales de Vente (CGV) ont pour objet de définir les conditions de souscription, d’utilisation et de paiement des abonnements professionnels proposés par OVRIA aux entreprises.",
      },
      {
        kind: "p",
        text: "Toute souscription à un abonnement implique l’acceptation pleine et entière des présentes CGV.",
      },
    ],
  },
  {
    id: "vendeur",
    heading: "Article 2 – Identification du vendeur",
    blocks: [
      { kind: "p", text: "Les abonnements sont commercialisés par :" },
      {
        kind: "lines",
        lines: [
          COMPANY.legalName,
          COMPANY.shortForm,
          ...COMPANY.addressLines,
        ],
      },
      { kind: "p", text: `Adresse électronique : ${COMPANY.contactEmail}` },
    ],
  },
  {
    id: "service",
    heading: "Article 3 – Description du service",
    blocks: [
      {
        kind: "p",
        text: "OVRIA est un réseau professionnel numérique spécialisé dans les métiers du bâtiment et des travaux publics (BTP).",
      },
      {
        kind: "p",
        text: "L’abonnement permet notamment aux entreprises :",
      },
      {
        kind: "ul",
        items: [
          "d’intégrer le réseau OVRIA ;",
          "d’être visibles auprès des travailleurs ;",
          "d’accéder aux fonctionnalités de recherche ;",
          "de consulter les profils disponibles ;",
          "d’entrer en contact avec les travailleurs ;",
          "d’utiliser la messagerie interne ;",
          "de développer leur réseau professionnel.",
        ],
      },
      {
        kind: "p",
        text: "Les fonctionnalités accessibles peuvent évoluer conformément aux présentes CGV.",
      },
    ],
  },
  {
    id: "souscription",
    heading: "Article 4 – Conditions de souscription",
    blocks: [
      {
        kind: "p",
        text: "La souscription est réservée aux professionnels agissant dans le cadre de leur activité.",
      },
      {
        kind: "p",
        text: "L’entreprise s’engage à fournir des informations exactes, complètes et à jour lors de la création de son compte.",
      },
      {
        kind: "p",
        text: "La souscription devient effective après validation du paiement.",
      },
      {
        kind: "p",
        text: "Aucun compte entreprise n’est visible sur la plateforme sans abonnement actif.",
      },
    ],
  },
  {
    id: "tarifs",
    heading: "Article 5 – Tarifs",
    blocks: [
      {
        kind: "p",
        text: "Les tarifs applicables sont ceux affichés sur la plateforme au jour de la souscription.",
      },
      {
        kind: "p",
        text: "OVRIA se réserve le droit de modifier ses tarifs à tout moment.",
      },
      { kind: "p", text: "Les nouveaux tarifs s’appliqueront uniquement :" },
      {
        kind: "ul",
        items: [
          "aux nouvelles souscriptions ;",
          "aux renouvellements d’abonnements.",
        ],
      },
      {
        kind: "p",
        text: "Les prix affichés sur la plateforme sont exprimés en euros selon les indications figurant lors de la souscription.",
      },
      {
        kind: "p",
        text: "Les abonnements en cours continuent à bénéficier du tarif applicable lors de leur souscription jusqu’à leur échéance.",
      },
    ],
  },
  {
    id: "paiement",
    heading: "Article 6 – Modalités de paiement",
    blocks: [
      {
        kind: "p",
        text: "Le paiement est effectué par l’intermédiaire du prestataire de paiement sélectionné par OVRIA, notamment Stripe.",
      },
      {
        kind: "p",
        text: "Les paiements sont sécurisés et réalisés conformément aux conditions du prestataire de paiement concerné.",
      },
      {
        kind: "p",
        text: "L’abonnement prend effet à compter de la validation du paiement.",
      },
      {
        kind: "p",
        text: "Les factures sont mises à disposition de l’entreprise exclusivement sous format électronique.",
      },
    ],
  },
  {
    id: "abonnement-mensuel",
    heading: "Article 7 – Abonnement mensuel",
    blocks: [
      {
        kind: "p",
        text: "L’abonnement mensuel est souscrit sans engagement de durée.",
      },
      {
        kind: "p",
        text: "Il est automatiquement reconduit de mois en mois jusqu’à sa résiliation par l’entreprise.",
      },
      {
        kind: "p",
        text: "L’entreprise peut résilier son abonnement à tout moment.",
      },
      {
        kind: "p",
        text: "La résiliation prend effet à la prochaine échéance mensuelle.",
      },
      {
        kind: "p",
        text: "Aucun remboursement ne pourra être effectué pour une période déjà commencée.",
      },
    ],
  },
  {
    id: "abonnement-annuel",
    heading: "Article 8 – Abonnement annuel",
    blocks: [
      {
        kind: "p",
        text: "L’abonnement annuel est souscrit pour une durée ferme de douze (12) mois.",
      },
      {
        kind: "p",
        text: "Il bénéficie d’un tarif préférentiel correspondant à une réduction de vingt-cinq pour cent (25 %) par rapport au coût cumulé de douze abonnements mensuels.",
      },
      {
        kind: "p",
        text: "Le paiement est effectué par mensualités pendant toute la durée de l’engagement.",
      },
      {
        kind: "p",
        text: "La résiliation anticipée ne met pas fin aux obligations financières de l’entreprise.",
      },
      {
        kind: "p",
        text: "Aucun remboursement des sommes déjà versées ne pourra être accordé.",
      },
    ],
  },
  {
    id: "impayes",
    heading: "Article 9 – Impayés",
    blocks: [
      {
        kind: "p",
        text: "En cas d’échec de paiement, d’impayé, de rejet de prélèvement, de révocation du mandat de paiement ou de tout incident de règlement, OVRIA se réserve le droit, sans préavis :",
      },
      {
        kind: "ul",
        items: [
          "de suspendre immédiatement l’accès aux fonctionnalités de la plateforme ;",
          "de rendre le profil entreprise invisible ;",
          "de bloquer temporairement ou définitivement le compte ;",
          "d’anonymiser certaines données ;",
          "de supprimer le compte en cas d’impayé persistant.",
        ],
      },
      {
        kind: "p",
        text: "Ces mesures ne font pas obstacle au recouvrement des sommes restant dues.",
      },
      {
        kind: "p",
        text: "Dans le cadre d’un abonnement annuel avec engagement, l’intégralité des échéances restant dues jusqu’au terme de l’engagement demeure exigible.",
      },
    ],
  },
  {
    id: "fin-abonnement",
    heading: "Article 10 – Fin d’abonnement et visibilité",
    blocks: [
      {
        kind: "p",
        text: "En cas d’expiration, de résiliation ou de non-renouvellement de l’abonnement :",
      },
      {
        kind: "ul",
        items: [
          "le profil entreprise demeure visible sur la plateforme pendant une durée maximale de neuf (9) mois ;",
          "les fonctionnalités réservées aux abonnés sont désactivées ;",
          "les travailleurs peuvent continuer à manifester leur intérêt auprès de l’entreprise ;",
          "l’entreprise peut réactiver un abonnement à tout moment pendant cette période.",
        ],
      },
      {
        kind: "p",
        text: "À l’issue de cette période, OVRIA se réserve le droit de :",
      },
      {
        kind: "ul",
        items: [
          "maintenir le compte ;",
          "rendre le compte invisible ;",
          "suspendre le compte ;",
          "anonymiser certaines données ;",
          "supprimer tout ou partie du compte et des données associées.",
        ],
      },
      {
        kind: "p",
        text: "Aucune indemnité ne pourra être réclamée à ce titre.",
      },
    ],
  },
  {
    id: "retractation",
    heading: "Article 11 – Absence de droit de rétractation",
    blocks: [
      {
        kind: "p",
        text: "Les abonnements proposés par OVRIA sont exclusivement destinés à des professionnels agissant dans le cadre de leur activité.",
      },
      {
        kind: "p",
        text: "En conséquence, aucun droit de rétractation n’est applicable.",
      },
    ],
  },
  {
    id: "remboursement",
    heading: "Article 12 – Absence de remboursement",
    blocks: [
      { kind: "p", text: "Aucun remboursement ne pourra être accordé :" },
      {
        kind: "ul",
        items: [
          "pour une période d’abonnement déjà commencée ;",
          "en cas de non-utilisation du service ;",
          "en cas de résiliation anticipée ;",
          "en cas de suspension du compte résultant d’un manquement aux présentes CGV ou aux CGU.",
        ],
      },
    ],
  },
  {
    id: "evolution",
    heading: "Article 13 – Évolution des services",
    blocks: [
      {
        kind: "p",
        text: "OVRIA se réserve le droit de faire évoluer, modifier, ajouter, suspendre ou supprimer certaines fonctionnalités de la plateforme à tout moment afin d’améliorer les services proposés ou de les adapter aux évolutions techniques, économiques, réglementaires ou commerciales.",
      },
      {
        kind: "p",
        text: "Les interruptions temporaires du service liées à des opérations de maintenance ou à des incidents techniques ne donnent droit à aucun remboursement ni indemnisation.",
      },
      {
        kind: "p",
        text: "Ces évolutions ne donnent lieu à aucune indemnisation ou remboursement au profit de l’entreprise.",
      },
    ],
  },
  {
    id: "garantie",
    heading: "Article 14 – Absence de garantie de résultat",
    blocks: [
      {
        kind: "p",
        text: "OVRIA est soumise à une obligation de moyens et non de résultat.",
      },
      {
        kind: "p",
        text: "L’abonnement donne accès aux fonctionnalités de la plateforme mais ne garantit notamment pas :",
      },
      {
        kind: "ul",
        items: [
          "la réception de manifestations d’intérêt ;",
          "la prise de contact par des travailleurs ;",
          "l’obtention de candidatures ;",
          "la conclusion d’un contrat ;",
          "la réalisation d’un recrutement ;",
          "l’atteinte d’un objectif commercial ou professionnel.",
        ],
      },
      {
        kind: "p",
        text: "Aucune indemnisation ou remboursement ne pourra être réclamé à ce titre.",
      },
    ],
  },
  {
    id: "force-majeure",
    heading: "Article 15 – Force majeure",
    blocks: [
      {
        kind: "p",
        text: "OVRIA ne pourra être tenue responsable de l’inexécution ou du retard dans l’exécution de ses obligations résultant d’un événement échappant raisonnablement à son contrôle.",
      },
      { kind: "p", text: "Sont notamment concernés :" },
      {
        kind: "ul",
        items: [
          "catastrophes naturelles ;",
          "incendies ;",
          "pandémies ;",
          "cyberattaques ;",
          "conflits sociaux ;",
          "défaillances de prestataires techniques ;",
          "interruptions des réseaux de télécommunications ;",
          "coupures d’électricité ;",
          "décisions administratives ou judiciaires empêchant temporairement l’exploitation du service.",
        ],
      },
    ],
  },
  {
    id: "responsabilite",
    heading: "Article 16 – Responsabilité",
    blocks: [
      {
        kind: "p",
        text: "La responsabilité d’OVRIA est strictement limitée à la fourniture des services prévus par l’abonnement souscrit.",
      },
      { kind: "p", text: "OVRIA ne pourra être tenue responsable :" },
      {
        kind: "ul",
        items: [
          "d’un recrutement infructueux ;",
          "d’un refus de candidature ;",
          "d’un conflit entre utilisateurs ;",
          "d’informations erronées publiées par un utilisateur ;",
          "de tout dommage indirect résultant de l’utilisation de la plateforme.",
        ],
      },
    ],
  },
  {
    id: "resiliation",
    heading: "Article 17 – Résiliation par OVRIA",
    blocks: [
      {
        kind: "p",
        text: "OVRIA peut suspendre ou résilier un abonnement en cas :",
      },
      {
        kind: "ul",
        items: [
          "de fraude ;",
          "de non-respect des présentes CGV ;",
          "de non-respect des CGU ;",
          "d’utilisation abusive de la plateforme ;",
          "de comportement portant atteinte au fonctionnement ou à l’image d’OVRIA.",
        ],
      },
      {
        kind: "p",
        text: "Les sommes déjà versées demeurent acquises à OVRIA.",
      },
    ],
  },
  {
    id: "donnees-personnelles",
    heading: "Article 18 – Données personnelles",
    blocks: [
      {
        kind: "p",
        text: "Les traitements de données personnelles réalisés dans le cadre de la fourniture des services sont décrits dans la Politique de confidentialité d’OVRIA.",
      },
      { kind: "p", text: "L’entreprise déclare en avoir pris connaissance." },
    ],
  },
  {
    id: "modification",
    heading: "Article 19 – Modification des CGV",
    blocks: [
      {
        kind: "p",
        text: "OVRIA se réserve le droit de modifier à tout moment les présentes CGV.",
      },
      {
        kind: "p",
        text: "Les nouvelles versions sont applicables à compter de leur publication sur la plateforme.",
      },
    ],
  },
  {
    id: "droit-applicable",
    heading: "Article 20 – Droit applicable et litiges",
    blocks: [
      { kind: "p", text: "Les présentes CGV sont soumises au droit français." },
      {
        kind: "p",
        text: "En cas de difficulté relative à leur interprétation ou à leur exécution, les parties s’efforceront de rechercher une solution amiable avant toute action judiciaire.",
      },
      {
        kind: "p",
        text: "À défaut d’accord amiable, les juridictions françaises compétentes seront seules compétentes.",
      },
    ],
  },
];

export default function CgvPage() {
  return (
    <LegalPage
      title={TITLE}
      intro="Les présentes Conditions Générales de Vente définissent les conditions de souscription, d’utilisation et de paiement des abonnements professionnels proposés par OVRIA aux entreprises du BTP."
      lastUpdated={LEGAL_VERSION_DATE}
      sections={SECTIONS}
    />
  );
}
