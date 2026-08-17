import type { Metadata } from "next";
import {
  LegalPage,
  type LegalSection,
} from "@/components/site/legal-page";
import { COMPANY, LEGAL_VERSION_DATE } from "@/lib/company";

/* Text supplied by the client — see docs/legal/cgu.docx. Transcribed verbatim;
   edit the source document, not this file, when the legal wording changes. */

const TITLE = "Conditions générales d’utilisation";
const DESCRIPTION =
  "Conditions d’accès et d’utilisation de la plateforme OVRIA : inscription, fonctionnement des services, abonnement entreprise, obligations des utilisateurs et responsabilité.";

export const metadata: Metadata = {
  title: `${TITLE} (CGU) — OVRIA`,
  description: DESCRIPTION,
  alternates: { canonical: "/cgu" },
};

const SECTIONS: LegalSection[] = [
  {
    id: "editeur",
    heading: "Article 1 – Identification de l’éditeur",
    blocks: [
      {
        kind: "p",
        text: "La plateforme OVRIA est éditée par la société OVRIA, société par actions simplifiée unipersonnelle (SASU), immatriculée en France, dont le siège social est situé au :",
      },
      { kind: "lines", lines: [COMPANY.address] },
      { kind: "p", text: `Adresse électronique : ${COMPANY.contactEmail}` },
      {
        kind: "p",
        text: "Les présentes Conditions Générales d’Utilisation (ci-après les « CGU ») ont pour objet de définir les conditions d’accès et d’utilisation de la plateforme OVRIA.",
      },
    ],
  },
  {
    id: "presentation",
    heading: "Article 2 – Présentation de la plateforme",
    blocks: [
      {
        kind: "p",
        text: "OVRIA est un réseau professionnel numérique spécialisé dans les métiers du bâtiment et des travaux publics (BTP).",
      },
      {
        kind: "p",
        text: "La plateforme a pour vocation de connecter les professionnels du BTP, les apprentis, les personnes en formation, les personnes en recherche d’emploi, les personnes en reconversion professionnelle et les entreprises du secteur.",
      },
      { kind: "p", text: "OVRIA permet notamment :" },
      {
        kind: "ul",
        items: [
          "aux travailleurs de valoriser leur profil professionnel ;",
          "de développer leur réseau professionnel ;",
          "de manifester leur intérêt auprès d’entreprises ;",
          "aux entreprises de rechercher des profils ;",
          "d’entrer directement en relation avec des travailleurs.",
        ],
      },
      {
        kind: "p",
        text: "OVRIA agit exclusivement comme une plateforme de mise en relation et de réseautage professionnel.",
      },
    ],
  },
  {
    id: "definitions",
    heading: "Article 3 – Définitions",
    blocks: [
      {
        kind: "p",
        text: "Aux fins des présentes CGU, les termes suivants ont la signification suivante :",
      },
      {
        kind: "ul",
        items: [
          "Plateforme : désigne l’application mobile, le site internet et les services OVRIA.",
          "Travailleur : toute personne physique disposant d’un profil professionnel sur la plateforme.",
          "Entreprise : toute personne morale ou entrepreneur individuel utilisant OVRIA dans un cadre professionnel.",
          "Utilisateur : tout travailleur ou entreprise inscrit sur la plateforme.",
          "Profil : espace personnel créé par un utilisateur.",
          "Abonnement : formule payante permettant aux entreprises d’accéder aux fonctionnalités professionnelles proposées par OVRIA.",
        ],
      },
    ],
  },
  {
    id: "acceptation",
    heading: "Article 4 – Acceptation des CGU",
    blocks: [
      {
        kind: "p",
        text: "Toute inscription sur la plateforme implique l’acceptation pleine et entière des présentes CGU.",
      },
      {
        kind: "p",
        text: "L’utilisateur reconnaît avoir pris connaissance des CGU avant toute utilisation des services proposés par OVRIA.",
      },
    ],
  },
  {
    id: "conditions-acces",
    heading: "Article 5 – Conditions d’accès",
    blocks: [
      { kind: "p", text: "La plateforme est accessible :" },
      {
        kind: "ul",
        items: [
          "aux personnes physiques âgées d’au moins quatorze (14) ans ;",
          "aux apprentis ;",
          "aux personnes en formation ;",
          "aux personnes en recherche d’emploi ;",
          "aux personnes en reconversion professionnelle ;",
          "aux entreprises légalement constituées ;",
          "aux professionnels exerçant dans le secteur du BTP.",
        ],
      },
      {
        kind: "p",
        text: "Les utilisateurs s’engagent à fournir des informations exactes, sincères et régulièrement mises à jour.",
      },
      {
        kind: "p",
        text: "Les utilisateurs mineurs utilisent la plateforme sous leur responsabilité et, le cas échéant, sous celle de leurs représentants légaux.",
      },
    ],
  },
  {
    id: "creation-compte",
    heading: "Article 6 – Création du compte",
    blocks: [
      {
        kind: "p",
        text: "L’accès à certaines fonctionnalités nécessite la création d’un compte utilisateur.",
      },
      {
        kind: "p",
        text: "L’utilisateur est responsable de la confidentialité de ses identifiants de connexion.",
      },
      { kind: "p", text: "Il s’engage à :" },
      {
        kind: "ul",
        items: [
          "ne pas communiquer ses identifiants à un tiers ;",
          "ne pas usurper l’identité d’une autre personne ;",
          "ne pas créer de compte frauduleux ;",
          "fournir des informations exactes.",
        ],
      },
      {
        kind: "p",
        text: "Toute utilisation du compte est réputée effectuée par son titulaire.",
      },
    ],
  },
  {
    id: "fonctionnement",
    heading: "Article 7 – Fonctionnement des services",
    blocks: [
      { kind: "h3", text: "7.1 Travailleurs" },
      {
        kind: "p",
        text: "L’utilisation de la plateforme est gratuite pour les travailleurs.",
      },
      { kind: "p", text: "Les travailleurs peuvent notamment :" },
      {
        kind: "ul",
        items: [
          "créer un profil professionnel ;",
          "présenter leurs compétences ;",
          "présenter leurs expériences ;",
          "renseigner leur mobilité géographique ;",
          "préciser leur disponibilité ;",
          "développer leur réseau professionnel ;",
          "être contactés par des entreprises ;",
          "manifester leur intérêt auprès des entreprises présentes sur la plateforme.",
        ],
      },
      { kind: "h3", text: "7.2 Entreprises" },
      { kind: "p", text: "Les entreprises peuvent :" },
      {
        kind: "ul",
        items: [
          "intégrer le réseau professionnel OVRIA ;",
          "être visibles auprès des travailleurs ;",
          "rechercher des profils ;",
          "contacter directement les travailleurs ;",
          "développer leur réseau professionnel.",
        ],
      },
      {
        kind: "p",
        text: "L’accès des entreprises à la plateforme est conditionné à la souscription d’un abonnement actif.",
      },
      {
        kind: "p",
        text: "OVRIA peut limiter ou suspendre certaines fonctionnalités en cas d’utilisation excessive, abusive ou susceptible de nuire à l’expérience des autres utilisateurs.",
      },
    ],
  },
  {
    id: "abonnement",
    heading: "Article 8 – Abonnement entreprise",
    blocks: [
      {
        kind: "p",
        text: "L’accès au réseau OVRIA pour les entreprises est soumis à la souscription d’un abonnement.",
      },
      { kind: "p", text: "Deux modalités de souscription sont proposées :" },
      { kind: "h3", text: "Abonnement mensuel" },
      {
        kind: "p",
        text: "L’abonnement mensuel est souscrit sans engagement de durée.",
      },
      {
        kind: "p",
        text: "Il est automatiquement reconduit de mois en mois jusqu’à sa résiliation.",
      },
      { kind: "h3", text: "Abonnement annuel" },
      {
        kind: "p",
        text: "L’abonnement annuel est souscrit pour une durée ferme de douze (12) mois.",
      },
      {
        kind: "p",
        text: "Il permet à l’entreprise de bénéficier d’un tarif préférentiel par rapport à l’abonnement mensuel.",
      },
      {
        kind: "p",
        text: "Le paiement de l’abonnement annuel est effectué par mensualités pendant toute la durée de l’engagement.",
      },
      {
        kind: "p",
        text: "Les modalités tarifaires applicables sont précisées dans les Conditions Générales de Vente (CGV).",
      },
    ],
  },
  {
    id: "impayes",
    heading: "Article 9 – Impayés et engagement annuel",
    blocks: [
      {
        kind: "p",
        text: "Dans le cadre d’un abonnement annuel avec engagement :",
      },
      {
        kind: "ul",
        items: [
          "l’entreprise demeure redevable de l’intégralité des échéances prévues pendant la durée d’engagement ;",
          "la suspension des prélèvements ;",
          "la révocation du mandat de paiement ;",
          "l’opposition aux prélèvements ;",
          "ou toute tentative de contournement du paiement,",
        ],
      },
      {
        kind: "p",
        text: "ne mettent pas fin aux obligations contractuelles de l’entreprise.",
      },
      {
        kind: "p",
        text: "Les sommes restant dues jusqu’au terme de l’engagement pourront être réclamées par OVRIA.",
      },
    ],
  },
  {
    id: "fin-abonnement",
    heading: "Article 10 – Fin d’abonnement et visibilité du profil entreprise",
    blocks: [
      {
        kind: "p",
        text: "En cas d’expiration, de résiliation ou de non-renouvellement d’un abonnement :",
      },
      {
        kind: "ul",
        items: [
          "le profil de l’entreprise demeure visible sur la plateforme pendant une durée maximale de neuf (9) mois ;",
          "les fonctionnalités réservées aux abonnés sont désactivées ;",
          "les travailleurs peuvent continuer à manifester leur intérêt auprès de l’entreprise ;",
          "l’entreprise peut réactiver un abonnement à tout moment durant cette période.",
        ],
      },
      {
        kind: "p",
        text: "À l’issue de cette période de neuf (9) mois sans abonnement actif, OVRIA se réserve le droit, sans obligation :",
      },
      {
        kind: "ul",
        items: [
          "de maintenir le compte ;",
          "de rendre le compte invisible ;",
          "de suspendre le compte ;",
          "d’anonymiser certaines données ;",
          "de supprimer tout ou partie du compte et des données associées.",
        ],
      },
      {
        kind: "p",
        text: "Aucune indemnité ne pourra être réclamée à ce titre.",
      },
    ],
  },
  {
    id: "obligations",
    heading: "Article 11 – Obligations des utilisateurs",
    blocks: [
      {
        kind: "p",
        text: "Les utilisateurs s’engagent à respecter la législation applicable.",
      },
      { kind: "p", text: "Il est notamment interdit :" },
      {
        kind: "ul",
        items: [
          "de publier des informations mensongères ;",
          "d’usurper une identité ;",
          "de harceler un autre utilisateur ;",
          "de diffuser des contenus illicites ;",
          "d’utiliser la plateforme à des fins frauduleuses ;",
          "de porter atteinte au bon fonctionnement de la plateforme ;",
          "d’utiliser des robots ou systèmes automatisés de collecte de données.",
        ],
      },
      {
        kind: "p",
        text: "OVRIA se réserve le droit de demander tout document permettant de vérifier l’identité, l’existence légale, véracité des informations communiquées ou l’activité professionnelle d’un utilisateur ou d’une entreprise.",
      },
    ],
  },
  {
    id: "actualisation",
    heading: "Article 12 – Actualisation des profils",
    blocks: [
      {
        kind: "p",
        text: "Afin de garantir la qualité des informations diffusées sur la plateforme, OVRIA peut rendre temporairement invisible tout profil n’ayant enregistré aucune activité ou mise à jour pendant une période prolongée.",
      },
      {
        kind: "p",
        text: "Sont notamment considérées comme des activités :",
      },
      {
        kind: "ul",
        items: [
          "la connexion au compte ;",
          "la mise à jour du profil ;",
          "la modification des informations professionnelles ;",
          "l’utilisation des fonctionnalités de la plateforme.",
        ],
      },
      {
        kind: "p",
        text: "L’ordre d’affichage des profils et entreprises peut dépendre de différents critères tels que la localisation, l’activité récente du compte, la complétude du profil ou tout autre critère déterminé par OVRIA.",
      },
      {
        kind: "p",
        text: "L’utilisateur pourra retrouver sa visibilité en se reconnectant ou en mettant à jour son profil.",
      },
    ],
  },
  {
    id: "disponibilite",
    heading: "Article 13 – Disponibilité de la plateforme",
    blocks: [
      {
        kind: "p",
        text: "OVRIA s’efforce d’assurer un accès continu à la plateforme.",
      },
      {
        kind: "p",
        text: "Toutefois, des interruptions peuvent intervenir notamment pour :",
      },
      {
        kind: "ul",
        items: [
          "maintenance ;",
          "mises à jour ;",
          "améliorations techniques ;",
          "incidents techniques indépendants de la volonté d’OVRIA.",
        ],
      },
      {
        kind: "p",
        text: "OVRIA ne garantit pas un fonctionnement ininterrompu ou exempt d’erreurs.",
      },
    ],
  },
  {
    id: "messagerie",
    heading: "Article 14 – Messagerie et échanges",
    blocks: [
      {
        kind: "p",
        text: "La plateforme peut permettre des échanges directs entre utilisateurs.",
      },
      {
        kind: "p",
        text: "OVRIA n’exerce aucun contrôle préalable sur les messages, documents ou informations échangés.",
      },
      {
        kind: "p",
        text: "Chaque utilisateur demeure seul responsable des contenus qu’il transmet.",
      },
    ],
  },
  {
    id: "role",
    heading: "Article 15 – Rôle d’OVRIA",
    blocks: [
      {
        kind: "p",
        text: "OVRIA agit exclusivement comme intermédiaire technique de mise en relation et de réseautage professionnel.",
      },
      { kind: "p", text: "OVRIA n’est ni :" },
      {
        kind: "ul",
        items: [
          "employeur ;",
          "cabinet de recrutement ;",
          "agence d’intérim ;",
          "organisme de formation.",
        ],
      },
      {
        kind: "p",
        text: "OVRIA fournit uniquement un service permettant aux utilisateurs de développer leur réseau professionnel et d’entrer en relation avec d’autres acteurs du secteur du BTP.",
      },
      { kind: "p", text: "OVRIA ne participe pas :" },
      {
        kind: "ul",
        items: [
          "aux recrutements ;",
          "aux négociations ;",
          "aux embauches ;",
          "aux contrats de travail ;",
          "aux contrats d’apprentissage ;",
          "aux prestations conclues entre utilisateurs.",
        ],
      },
    ],
  },
  {
    id: "responsabilite",
    heading: "Article 16 – Responsabilité",
    blocks: [
      { kind: "p", text: "OVRIA ne garantit pas :" },
      {
        kind: "ul",
        items: [
          "l’obtention d’un emploi ;",
          "l’obtention d’un contrat ;",
          "l’obtention d’un apprentissage ;",
          "le succès d’un recrutement ;",
          "la conclusion d’une relation professionnelle.",
        ],
      },
      { kind: "p", text: "Chaque utilisateur demeure seul responsable :" },
      {
        kind: "ul",
        items: [
          "des informations publiées ;",
          "des documents transmis ;",
          "des échanges réalisés ;",
          "des décisions professionnelles prises.",
        ],
      },
      { kind: "p", text: "OVRIA ne pourra être tenue responsable :" },
      {
        kind: "ul",
        items: [
          "d’un recrutement infructueux ;",
          "d’une rupture de contrat ;",
          "d’un licenciement ;",
          "d’une démission ;",
          "d’une rupture de période d’essai ;",
          "d’un différend entre utilisateurs ;",
          "d’informations erronées diffusées par un utilisateur ;",
          "de tout dommage indirect résultant de l’utilisation de la plateforme.",
        ],
      },
    ],
  },
  {
    id: "suspension",
    heading: "Article 17 – Suspension et suppression des comptes",
    blocks: [
      {
        kind: "p",
        text: "OVRIA peut suspendre ou supprimer un compte en cas :",
      },
      {
        kind: "ul",
        items: [
          "de fraude ;",
          "de non-respect des présentes CGU ;",
          "d’usurpation d’identité ;",
          "de comportement abusif ;",
          "d’atteinte au bon fonctionnement ou à l’image de la plateforme.",
        ],
      },
      {
        kind: "p",
        text: "Toute tentative de contournement du fonctionnement normal de la plateforme, notamment en vue d’accéder à des informations ou fonctionnalités sans abonnement actif, est interdite.",
      },
      {
        kind: "p",
        text: "L’utilisateur peut demander la suppression de son compte à tout moment.",
      },
    ],
  },
  {
    id: "donnees-personnelles",
    heading: "Article 18 – Données personnelles",
    blocks: [
      {
        kind: "p",
        text: "Les modalités de collecte, de traitement, de conservation et de protection des données personnelles sont détaillées dans la Politique de Confidentialité d’OVRIA.",
      },
      {
        kind: "p",
        text: "L’utilisation de la plateforme implique l’acceptation de cette politique.",
      },
    ],
  },
  {
    id: "propriete-intellectuelle",
    heading: "Article 19 – Propriété intellectuelle",
    blocks: [
      {
        kind: "p",
        text: "La marque OVRIA, son logo, son identité visuelle, ses textes, ses fonctionnalités, ses bases de données, son application mobile et l’ensemble des éléments composant la plateforme sont protégés par les dispositions du Code de la propriété intellectuelle.",
      },
      {
        kind: "p",
        text: "Toute reproduction, représentation, diffusion ou exploitation non autorisée est strictement interdite.",
      },
      {
        kind: "p",
        text: "En cas de fusion, acquisition, cession d’activité ou transmission universelle de patrimoine, les contrats conclus avec les utilisateurs pourront être transférés au nouvel exploitant de la plateforme.",
      },
    ],
  },
  {
    id: "modification",
    heading: "Article 20 – Modification des CGU",
    blocks: [
      {
        kind: "p",
        text: "OVRIA se réserve le droit de modifier à tout moment les présentes CGU afin de tenir compte notamment :",
      },
      {
        kind: "ul",
        items: [
          "des évolutions légales ;",
          "des évolutions réglementaires ;",
          "des évolutions techniques ;",
          "des évolutions des services proposés.",
        ],
      },
      {
        kind: "p",
        text: "La version en vigueur est celle publiée sur la plateforme.",
      },
    ],
  },
  {
    id: "droit-applicable",
    heading: "Article 21 – Droit applicable",
    blocks: [
      { kind: "p", text: "Les présentes CGU sont soumises au droit français." },
      {
        kind: "p",
        text: "En cas de difficulté relative à leur interprétation ou à leur exécution, les parties s’efforceront de rechercher une solution amiable avant toute action judiciaire.",
      },
    ],
  },
];

export default function CguPage() {
  return (
    <LegalPage
      title={TITLE}
      intro="Les présentes Conditions Générales d’Utilisation définissent les conditions d’accès et d’utilisation de la plateforme OVRIA, réseau professionnel numérique spécialisé dans les métiers du bâtiment et des travaux publics."
      lastUpdated={LEGAL_VERSION_DATE}
      sections={SECTIONS}
    />
  );
}
