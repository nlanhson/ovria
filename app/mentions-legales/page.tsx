import type { Metadata } from "next";
import {
  LegalPage,
  type LegalSection,
} from "@/components/site/legal-page";
import { COMPANY, LEGAL_VERSION_DATE } from "@/lib/company";

/* Text supplied by the client — see docs/legal/mentions-legales.docx.
   Transcribed verbatim; edit the source document, not this file, when the
   legal wording changes. */

const TITLE = "Mentions légales";
const DESCRIPTION =
  "Éditeur, hébergement, propriété intellectuelle et responsabilité de la plateforme OVRIA, réseau professionnel dédié au BTP.";

export const metadata: Metadata = {
  title: `${TITLE} — OVRIA`,
  description: DESCRIPTION,
  alternates: { canonical: "/mentions-legales" },
};

const SECTIONS: LegalSection[] = [
  {
    id: "editeur",
    heading: "1. Éditeur de la plateforme",
    blocks: [
      { kind: "p", text: "La plateforme OVRIA est éditée par :" },
      {
        kind: "lines",
        lines: [
          `${COMPANY.legalName} – ${COMPANY.shortForm}`,
          ...COMPANY.addressLines,
        ],
      },
      {
        kind: "p",
        text: `Société par Actions Simplifiée Unipersonnelle (SASU) au capital de : ${COMPANY.capital}`,
      },
      {
        kind: "p",
        text: `Immatriculée au Registre du Commerce et des Sociétés sous le numéro SIREN : ${COMPANY.siren}`,
      },
      {
        kind: "p",
        text: `Numéro de TVA intracommunautaire : ${COMPANY.vat}`,
      },
      {
        kind: "p",
        text: `Directeur de la publication : ${COMPANY.publicationDirector}`,
      },
      { kind: "p", text: `Adresse électronique : ${COMPANY.contactEmail}` },
    ],
  },
  {
    id: "objet",
    heading: "2. Objet de la plateforme",
    blocks: [
      {
        kind: "p",
        text: "OVRIA est une plateforme numérique de mise en relation professionnelle dédiée au secteur du BTP (Bâtiment et Travaux Publics).",
      },
      {
        kind: "p",
        text: "Elle permet aux entreprises et aux travailleurs du secteur de se connecter directement, simplement et efficacement, afin de faciliter les opportunités professionnelles, sans passer par les offres d’emploi traditionnelles.",
      },
      {
        kind: "p",
        text: "La création d’un profil utilisateur sur la plateforme permet de rendre ce profil visible aux autres utilisateurs, qu’il s’agisse d’entreprises ou de travailleurs, afin de favoriser les mises en relation professionnelles.",
      },
      {
        kind: "p",
        text: "OVRIA n’intervient ni comme employeur, ni comme agence de recrutement, ni comme intermédiaire contractuel dans les relations pouvant être établies entre les utilisateurs.",
      },
      {
        kind: "p",
        text: "OVRIA se réserve le droit de modifier les présentes mentions légales à tout moment afin de tenir compte des évolutions législatives, réglementaires ou techniques.",
      },
    ],
  },
  {
    id: "acces",
    heading: "3. Accès au service",
    blocks: [
      {
        kind: "p",
        text: "La plateforme est accessible via l’application mobile OVRIA ainsi que tout autre support numérique développé ou exploité par la société.",
      },
      {
        kind: "p",
        text: "OVRIA s’efforce d’assurer un accès continu à ses services, sans pouvoir garantir une disponibilité permanente et sans interruption, notamment en raison d’opérations de maintenance, de mises à jour ou d’événements indépendants de sa volonté.",
      },
      {
        kind: "p",
        text: "OVRIA ne garantit pas une disponibilité permanente ou l’absence d’erreurs.",
      },
      {
        kind: "p",
        text: "La société se réserve le droit de suspendre, limiter ou interrompre temporairement tout ou partie de la plateforme, sans préavis, lorsque cela est nécessaire au bon fonctionnement du service.",
      },
    ],
  },
  {
    id: "hebergement",
    heading: "4. Hébergement",
    blocks: [
      {
        kind: "p",
        text: "La plateforme est hébergée par un prestataire technique sélectionné par OVRIA.",
      },
    ],
  },
  {
    id: "propriete-intellectuelle",
    heading: "5. Propriété intellectuelle",
    blocks: [
      {
        kind: "p",
        text: "L’ensemble des éléments composant la plateforme OVRIA, notamment les textes, bases de données, graphismes, logos, marques, illustrations, photographies, vidéos, interfaces, logiciels, fonctionnalités et leur organisation, sont protégés par les dispositions du Code de la propriété intellectuelle et demeurent la propriété exclusive d’OVRIA ou de leurs titulaires respectifs.",
      },
      {
        kind: "p",
        text: "Toute reproduction, représentation, modification, adaptation, extraction, diffusion ou exploitation, totale ou partielle, sans autorisation écrite préalable, est strictement interdite.",
      },
      {
        kind: "p",
        text: "Toute utilisation non autorisée est susceptible de constituer une contrefaçon engageant la responsabilité civile et pénale de son auteur.",
      },
      {
        kind: "p",
        text: "Les bases de données sont également protégées en qualité de producteur de bases de données.",
      },
    ],
  },
  {
    id: "responsabilite",
    heading: "6. Responsabilité",
    blocks: [
      {
        kind: "p",
        text: "OVRIA agit exclusivement en qualité de plateforme de mise en relation professionnelle.",
      },
      {
        kind: "p",
        text: "La société n’est pas partie aux relations contractuelles pouvant être conclues entre les utilisateurs.",
      },
      { kind: "p", text: "OVRIA ne garantit notamment pas :" },
      {
        kind: "ul",
        items: [
          "l’exactitude ou la véracité des informations publiées par les utilisateurs ;",
          "la qualité des prestations proposées ;",
          "la solvabilité des entreprises ;",
          "les compétences des travailleurs ;",
          "la conclusion effective d’un contrat ou d’une mission.",
        ],
      },
      {
        kind: "p",
        text: "Chaque utilisateur est seul responsable des informations qu’il publie ainsi que des engagements qu’il prend dans le cadre de ses échanges avec d’autres utilisateurs.",
      },
      {
        kind: "p",
        text: "La responsabilité d’OVRIA ne pourra être engagée en cas de litige, rupture de relation contractuelle, annulation de mission, perte financière ou tout dommage résultant des relations entre utilisateurs.",
      },
    ],
  },
  {
    id: "donnees-personnelles",
    heading: "7. Données personnelles",
    blocks: [
      {
        kind: "p",
        text: "OVRIA collecte et traite certaines données personnelles dans le respect du Règlement (UE) 2016/679 (RGPD) et de la législation française en vigueur.",
      },
      {
        kind: "p",
        text: "Les modalités de collecte, de traitement, de conservation et d’exercice des droits des utilisateurs sont détaillées dans la Politique de confidentialité disponible sur la plateforme.",
      },
    ],
  },
  {
    id: "cookies",
    heading: "8. Cookies",
    blocks: [
      {
        kind: "p",
        text: "L’application et les services associés peuvent utiliser des cookies ou technologies similaires afin d’assurer leur bon fonctionnement, mesurer l’audience et améliorer l’expérience utilisateur.",
      },
      {
        kind: "p",
        text: "Les modalités de gestion des cookies sont précisées dans la Politique de confidentialité.",
      },
    ],
  },
  {
    id: "signalement",
    heading: "9. Signalement de contenus",
    blocks: [
      {
        kind: "p",
        text: "Tout utilisateur peut signaler un contenu qu’il estime illicite, frauduleux ou contraire aux Conditions Générales d’Utilisation.",
      },
      {
        kind: "p",
        text: "OVRIA se réserve le droit de retirer tout contenu manifestement illicite et de suspendre ou supprimer le compte de tout utilisateur ne respectant pas les règles de la plateforme.",
      },
    ],
  },
  {
    id: "liens-hypertextes",
    heading: "10. Liens hypertextes",
    blocks: [
      {
        kind: "p",
        text: "La plateforme peut contenir des liens vers des sites internet tiers.",
      },
      {
        kind: "p",
        text: "OVRIA n’exerce aucun contrôle sur ces sites et décline toute responsabilité quant à leur contenu, leur disponibilité ou leur politique de confidentialité.",
      },
    ],
  },
  {
    id: "droit-applicable",
    heading: "11. Droit applicable",
    blocks: [
      {
        kind: "p",
        text: "Les présentes mentions légales sont régies par le droit français.",
      },
      {
        kind: "p",
        text: "Sous réserve des dispositions légales impératives applicables, tout litige relatif à leur interprétation ou à leur exécution relève de la compétence des juridictions françaises.",
      },
    ],
  },
  {
    id: "contact",
    heading: "12. Contact",
    blocks: [
      {
        kind: "p",
        text: "Pour toute question concernant la plateforme ou les présentes mentions légales, les utilisateurs peuvent contacter OVRIA à l’adresse suivante :",
      },
      { kind: "p", text: COMPANY.contactEmail },
    ],
  },
];

export default function MentionsLegalesPage() {
  return (
    <LegalPage
      title={TITLE}
      intro="Informations relatives à l’éditeur de la plateforme OVRIA, à son objet, à l’accès au service et aux conditions d’utilisation des contenus qu’elle publie."
      lastUpdated={LEGAL_VERSION_DATE}
      sections={SECTIONS}
    />
  );
}
