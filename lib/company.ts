/** OVRIA's legal identity, as stated in the Mentions légales supplied by the
 *  client (docs/legal/mentions-legales.docx). Single source of truth for every
 *  legal page — update here, not inline. */
export const COMPANY = {
  legalName: "OVRIA",
  legalForm: "société par actions simplifiée unipersonnelle (SASU)",
  shortForm: "SASU",
  capital: "1 000 €",
  siren: "104036249",
  vat: "FR07104036249",
  publicationDirector: "Le Président de la société OVRIA",
  addressLines: ["10 rue Webster", "62100 Calais – France"],
  address: "10 rue Webster – 62100 Calais – France",
  contactEmail: "contact@ovria.fr",
} as const;

/** Version date carried by the CGU, CGV and Politique de confidentialité.
 *  The Mentions légales ship undated, so they reuse this. */
export const LEGAL_VERSION_DATE = "07 juin 2026";
