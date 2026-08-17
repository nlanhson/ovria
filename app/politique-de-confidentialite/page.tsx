import type { Metadata } from "next";
import {
  LegalPage,
  type LegalSection,
} from "@/components/site/legal-page";
import { COMPANY, LEGAL_VERSION_DATE } from "@/lib/company";

/* Text supplied by the client — see docs/legal/politique-de-confidentialite.docx.
   Transcribed verbatim; edit the source document, not this file, when the legal
   wording changes. Replaces the earlier mockup, which carried placeholder
   company details. */

const TITLE = "Politique de confidentialité";
const DESCRIPTION =
  "Comment OVRIA collecte, utilise, conserve et protège vos données personnelles, conformément au RGPD et à la législation française applicable.";

export const metadata: Metadata = {
  title: `${TITLE} — OVRIA`,
  description: DESCRIPTION,
  alternates: { canonical: "/politique-de-confidentialite" },
};

const SECTIONS: LegalSection[] = [
  {
    id: "presentation",
    heading: "1. Présentation",
    blocks: [
      {
        kind: "p",
        text: "La présente Politique de confidentialité a pour objet d’informer les utilisateurs de la plateforme OVRIA sur la manière dont leurs données personnelles sont collectées, utilisées, conservées et protégées.",
      },
      {
        kind: "p",
        text: "OVRIA accorde une importance particulière à la protection des données personnelles et s’engage à traiter celles-ci conformément au Règlement (UE) 2016/679 du 27 avril 2016 (RGPD) ainsi qu’à la législation française applicable.",
      },
    ],
  },
  {
    id: "responsable",
    heading: "2. Responsable du traitement",
    blocks: [
      { kind: "p", text: "Le responsable du traitement est :" },
      {
        kind: "lines",
        lines: [
          COMPANY.legalName,
          COMPANY.shortForm,
          ...COMPANY.addressLines,
        ],
      },
      { kind: "p", text: `Contact : ${COMPANY.contactEmail}` },
    ],
  },
  {
    id: "donnees-collectees",
    heading: "3. Données collectées",
    blocks: [
      { kind: "h3", text: "3.1 Données des travailleurs" },
      {
        kind: "p",
        text: "Lors de l’inscription et de l’utilisation de la plateforme, OVRIA peut collecter :",
      },
      {
        kind: "ul",
        items: [
          "prénom ;",
          "nom ;",
          "photographie de profil ;",
          "métier ;",
          "expériences professionnelles ;",
          "formations ;",
          "préférences contractuelles ;",
          "ville ;",
          "localisation géographique et rayon de mobilité ;",
          "CV intégré à l’application ;",
          "description professionnelle ;",
          "lien portfolio ;",
          "statut de disponibilité ;",
          "informations de connexion ;",
          "historique des échanges réalisés sur la plateforme.",
        ],
      },
      { kind: "h3", text: "3.2 Données des entreprises" },
      { kind: "p", text: "OVRIA peut collecter :" },
      {
        kind: "ul",
        items: [
          "dénomination de l’entreprise ;",
          "siret ;",
          "logo ;",
          "ville ;",
          "description de l’activité ;",
          "statut juridique ;",
          "lien portfolio ;",
          "informations de connexion ;",
          "historique des échanges ;",
          "données liées à l’abonnement.",
        ],
      },
      { kind: "h3", text: "3.3 Données techniques" },
      { kind: "p", text: "OVRIA peut également collecter :" },
      {
        kind: "ul",
        items: [
          "adresse IP ;",
          "identifiants techniques ;",
          "données de navigation ;",
          "données de connexion ;",
          "informations relatives au terminal utilisé ;",
          "données de sécurité.",
        ],
      },
    ],
  },
  {
    id: "donnees-visibles",
    heading: "4. Données visibles sur la plateforme",
    blocks: [
      { kind: "h3", text: "Profils travailleurs" },
      { kind: "p", text: "Les entreprises peuvent consulter :" },
      {
        kind: "ul",
        items: [
          "prénom ;",
          "nom ;",
          "photographie ;",
          "métier ;",
          "expériences ;",
          "formations ;",
          "ville ;",
          "rayon de mobilité ;",
          "CV ;",
          "description ;",
          "lien portfolio ;",
          "statut de disponibilité ;",
          "indication relative à l’actualisation du profil.",
        ],
      },
      {
        kind: "p",
        text: "Les adresses électroniques et numéros de téléphone ne sont pas rendus publics sur les profils.",
      },
      { kind: "h3", text: "Profils entreprises" },
      { kind: "p", text: "Les travailleurs peuvent consulter :" },
      {
        kind: "ul",
        items: [
          "nom de l’entreprise ;",
          "logo ;",
          "ville ;",
          "description ;",
          "statut juridique ;",
          "lien portfolio.",
        ],
      },
      {
        kind: "p",
        text: "Les adresses électroniques et numéros de téléphone ne sont pas rendus publics sur les profils.",
      },
    ],
  },
  {
    id: "finalites",
    heading: "5. Finalités des traitements",
    blocks: [
      { kind: "p", text: "Les données sont collectées afin de :" },
      {
        kind: "ul",
        items: [
          "permettre la création et la gestion des comptes utilisateurs ;",
          "faciliter les mises en relation professionnelles ;",
          "permettre l’utilisation de la messagerie interne ;",
          "gérer les abonnements entreprises ;",
          "assurer la sécurité de la plateforme ;",
          "améliorer les services proposés ;",
          "produire des statistiques d’utilisation ;",
          "répondre aux obligations légales.",
        ],
      },
    ],
  },
  {
    id: "bases-legales",
    heading: "6. Bases légales des traitements",
    blocks: [
      {
        kind: "p",
        text: "OVRIA traite les données personnelles sur les fondements suivants :",
      },
      {
        kind: "ul",
        items: [
          "exécution du contrat conclu avec l’utilisateur ;",
          "intérêt légitime d’OVRIA à améliorer et sécuriser la plateforme ;",
          "consentement lorsque celui-ci est requis ;",
          "respect des obligations légales applicables.",
        ],
      },
    ],
  },
  {
    id: "messagerie",
    heading: "7. Messagerie interne",
    blocks: [
      {
        kind: "p",
        text: "Lorsqu’une demande de conversation est acceptée par les utilisateurs concernés, ceux-ci peuvent échanger directement via la messagerie intégrée à la plateforme.",
      },
      {
        kind: "p",
        text: "Les messages sont conservés afin de permettre le bon fonctionnement du service et d’assurer la sécurité des échanges.",
      },
      {
        kind: "p",
        text: "OVRIA n’exerce aucun contrôle préalable sur le contenu des conversations.",
      },
    ],
  },
  {
    id: "geolocalisation",
    heading: "8. Géolocalisation",
    blocks: [
      {
        kind: "p",
        text: "OVRIA peut traiter des données de localisation afin de permettre aux utilisateurs :",
      },
      {
        kind: "ul",
        items: [
          "d’indiquer leur zone de recherche ;",
          "de définir un rayon de mobilité ;",
          "d’identifier les opportunités professionnelles à proximité.",
        ],
      },
      {
        kind: "p",
        text: "Les données de localisation sont utilisées exclusivement dans le cadre du fonctionnement de la plateforme.",
      },
    ],
  },
  {
    id: "authentification",
    heading: "9. Connexion et authentification",
    blocks: [
      { kind: "p", text: "Les utilisateurs peuvent se connecter :" },
      {
        kind: "ul",
        items: [
          "par adresse électronique et mot de passe ;",
          "via leur compte Google ;",
          "via leur compte Apple.",
        ],
      },
      {
        kind: "p",
        text: "L’utilisation de ces services d’authentification implique la transmission des données strictement nécessaires à la création et à la gestion du compte OVRIA.",
      },
    ],
  },
  {
    id: "audience",
    heading: "10. Analyse d’audience",
    blocks: [
      {
        kind: "p",
        text: "OVRIA utilise des outils d’analyse d’audience tels que Google Analytics afin de :",
      },
      {
        kind: "ul",
        items: [
          "mesurer l’utilisation de la plateforme ;",
          "améliorer les fonctionnalités proposées ;",
          "comprendre les comportements de navigation.",
        ],
      },
      {
        kind: "p",
        text: "Ces outils peuvent utiliser des cookies ou technologies similaires.",
      },
    ],
  },
  {
    id: "destinataires",
    heading: "11. Destinataires des données",
    blocks: [
      { kind: "p", text: "Les données personnelles peuvent être accessibles :" },
      {
        kind: "ul",
        items: [
          "aux utilisateurs dans les limites définies par les paramètres de visibilité de la plateforme ;",
          "aux prestataires techniques intervenant pour le fonctionnement du service ;",
          "aux prestataires de paiement ;",
          "aux autorités administratives ou judiciaires lorsque la loi l’exige.",
        ],
      },
      {
        kind: "p",
        text: "OVRIA ne vend jamais les données personnelles de ses utilisateurs.",
      },
    ],
  },
  {
    id: "hebergement",
    heading: "12. Hébergement et sous-traitants",
    blocks: [
      {
        kind: "p",
        text: "Les données peuvent être hébergées ou traitées par des prestataires présentant des garanties appropriées en matière de sécurité et de conformité au RGPD.",
      },
      { kind: "p", text: "OVRIA peut notamment recourir à :" },
      {
        kind: "ul",
        items: [
          "OVHcloud ;",
          "Google Cloud Platform ;",
          "Firebase ;",
          "Google Analytics ;",
          "Stripe ;",
          "Supabase.",
        ],
      },
    ],
  },
  {
    id: "conservation",
    heading: "13. Durée de conservation",
    blocks: [
      { kind: "h3", text: "Comptes travailleurs" },
      {
        kind: "p",
        text: "Les données sont conservées pendant toute la durée d’utilisation du compte.",
      },
      {
        kind: "p",
        text: "Un profil n’ayant enregistré aucune activité pendant douze (12) mois pourra être rendu temporairement invisible.",
      },
      {
        kind: "p",
        text: "Après vingt-quatre (24) mois d’inactivité, OVRIA pourra anonymiser ou supprimer le compte ainsi que les données associées.",
      },
      { kind: "h3", text: "Comptes entreprises" },
      {
        kind: "p",
        text: "En cas de résiliation ou d’expiration de l’abonnement, le profil demeure visible pendant une durée maximale de neuf (9) mois.",
      },
      {
        kind: "p",
        text: "À l’issue de cette période, OVRIA se réserve le droit de maintenir, rendre invisible, anonymiser ou supprimer le compte et les données associées.",
      },
    ],
  },
  {
    id: "securite",
    heading: "14. Sécurité des données",
    blocks: [
      {
        kind: "p",
        text: "OVRIA met en œuvre des mesures techniques et organisationnelles destinées à assurer la sécurité, l’intégrité et la confidentialité des données personnelles.",
      },
      {
        kind: "p",
        text: "Malgré ces mesures, aucun système informatique ne peut garantir une sécurité absolue.",
      },
    ],
  },
  {
    id: "droits",
    heading: "15. Droits des utilisateurs",
    blocks: [
      {
        kind: "p",
        text: "Conformément au RGPD, chaque utilisateur dispose :",
      },
      {
        kind: "ul",
        items: [
          "d’un droit d’accès ;",
          "d’un droit de rectification ;",
          "d’un droit d’effacement ;",
          "d’un droit d’opposition ;",
          "d’un droit à la limitation du traitement ;",
          "d’un droit à la portabilité des données ;",
          "du droit de retirer son consentement lorsque le traitement repose sur celui-ci.",
        ],
      },
      {
        kind: "p",
        text: `Toute demande peut être adressée à : ${COMPANY.contactEmail}`,
      },
    ],
  },
  {
    id: "reclamation",
    heading: "16. Réclamation",
    blocks: [
      {
        kind: "p",
        text: "Les utilisateurs disposent du droit d’introduire une réclamation auprès de la Commission Nationale de l’Informatique et des Libertés (CNIL).",
      },
    ],
  },
  {
    id: "modification",
    heading: "17. Modification de la politique",
    blocks: [
      {
        kind: "p",
        text: "OVRIA peut modifier la présente Politique de confidentialité à tout moment afin de tenir compte des évolutions légales, réglementaires, techniques ou fonctionnelles.",
      },
      {
        kind: "p",
        text: "La version applicable est celle publiée sur la plateforme.",
      },
    ],
  },
  {
    id: "suppression-compte",
    heading: "18. Suppression du compte",
    blocks: [
      {
        kind: "p",
        text: "Les utilisateurs peuvent supprimer leur compte à tout moment depuis les paramètres de l’application.",
      },
      {
        kind: "p",
        text: "La suppression du compte entraîne la suppression ou l’anonymisation des données personnelles associées dans un délai raisonnable, sous réserve des obligations légales de conservation applicables.",
      },
      {
        kind: "p",
        text: "Lorsque la suppression du compte est demandée par un utilisateur bénéficiant d’un abonnement actif, cette suppression n’entraîne pas automatiquement la résiliation des engagements financiers en cours, lesquels demeurent régis par les Conditions Générales de Vente (CGV).",
      },
      {
        kind: "p",
        text: "Certaines données pourront être conservées lorsque leur conservation est nécessaire :",
      },
      {
        kind: "ul",
        items: [
          "au respect d’une obligation légale ;",
          "à l’exercice ou à la défense des droits d’OVRIA ;",
          "à la prévention des fraudes et des abus.",
        ],
      },
      {
        kind: "p",
        text: "La suppression du compte entraîne la perte d’accès aux services, fonctionnalités et informations associés au compte concerné.",
      },
    ],
  },
  {
    id: "contact",
    heading: "19. Contact",
    blocks: [
      {
        kind: "p",
        text: "Pour toute question relative à la présente Politique de confidentialité ou à l’exercice des droits RGPD :",
      },
      { kind: "p", text: COMPANY.contactEmail },
    ],
  },
];

export default function PolitiqueDeConfidentialitePage() {
  return (
    <LegalPage
      title={TITLE}
      intro="La présente Politique de confidentialité a pour objet d’informer les utilisateurs de la plateforme OVRIA sur la manière dont leurs données personnelles sont collectées, utilisées, conservées et protégées, conformément au RGPD et à la législation française applicable."
      lastUpdated={LEGAL_VERSION_DATE}
      sections={SECTIONS}
    />
  );
}
