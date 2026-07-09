// Real CasaBuffet photo library, classified by visual analysis of each image.
// Vite bundles everything under src/assets/images and gives us hashed URLs.
const modules = import.meta.glob('./assets/images/*.{jpeg,jpg,png}', { eager: true, query: '?url', import: 'default' });

const urlByName = {};
for (const path in modules) {
  const name = path.split('/').pop();
  urlByName[name] = modules[path];
}

/** Resolve a bundled image URL from its filename. */
export const photo = (name) => urlByName[name];

// ---- Curated sets per category (best-of, ordered by visual quality) ----
export const SETS = {
  engagement: [
    '2B717078-7BC7-4668-AB6C-691BB8877B0F.jpeg',
    '014B13B7-0D56-446E-AD83-E16B98D7BA94.jpeg',
    'B7F9B024-EE52-46EE-B8FE-E3EE4B0651B3.jpeg',
    'D7E0DF73-277E-479A-8D5B-C2D70FE4C818.jpeg',
    '8D07AE11-E65F-401B-BDB6-33E54ABFC0AC.jpeg',
    '2F8C122E-E7B4-4B88-8E59-80D1C270A61C.jpeg',
    'D35D9F65-5838-4559-A499-8ADD3994ECD1.jpeg',
    '73714601-88E4-46EF-BA59-7F4359C717F8.jpeg',
    'A0203E69-F816-496F-9C11-DFF61DB5EBBB.jpeg',
    'AA646CE7-1268-4E2C-80F9-DE8AEB5A856F.jpeg',
    '40D78DF8-C864-4323-A17E-D0ECFC747F1C.jpeg',
    '89081DF9-D9E6-4094-90B4-C724D8A40614.jpeg',
    '495CAF9C-DD4D-4B41-A0CC-5A9A00049557.jpeg',
    'EF34B1ED-36CE-4914-85C2-CC73FAE92267.jpeg',
    'D33E46DF-C312-478D-AB6C-3A148FEBC951.jpeg',
    '6468FD11-7C97-4010-8FE5-968164C6159C.jpeg',
    '2A51D7A3-46D0-4648-B2EB-3BEB11733173.jpeg',
    '56ED3030-F523-4B0E-A2DC-F470FA673E41.jpeg',
    'AA10E26B-113F-4243-AF62-56B23C1DB8CA.jpeg',
    '379354E9-B3B8-4BB9-86B0-C0D48C8C0E5E.jpeg',
  ],
  decor: [
    '2AA46FF6-036E-40C8-83DC-31A1E1C537F5.jpeg',
    '52107657-6001-4D04-8366-D20954779C40.jpeg',
    'A9C435A1-1440-405D-8AE5-15CE062064B8.jpeg',
    '073C1742-6FA1-4930-8F4F-126C6342405F.jpeg',
    '19478BF8-5CF9-4C52-B084-E1EFD2E45D67.jpeg',
    '6E412547-DD45-4EB8-88AA-521626E8C9C1.jpeg',
    '7454801F-40ED-40FD-BECE-0E438F585D2C.jpeg',
    '4280DD1D-4B78-49EC-8EDB-B3B92DA160AF.jpeg',
    'F3A4EBF8-9EB1-4D2B-BF1E-1539F0D30C3B.jpeg',
    'C6816B27-7D20-4F65-8513-281562D10071.jpeg',
    'BD873CCC-0318-4BFF-B815-F6AFFF20FA41.jpeg',
    'ABB1356C-B679-4427-BD1A-CB3F0207B1B0.jpeg',
    '75A28607-9AC9-4EE0-8CD4-C302FD180C48.jpeg',
  ],
  dessert: [
    '14876A63-0499-4DA0-BF6C-F566A3520E56.jpeg',
    '3137A94F-F79F-4EF5-9720-37F47B1139DB.jpeg',
    '8B895EDE-1B4E-4414-99A5-31B5A0120825.jpeg',
    '9F340ADE-CC10-4638-B995-73A5486A6041.jpeg',
    'E7B3C31E-9FC1-454A-8BB3-5FE0EBB9AC86.jpeg',
    '80BAE512-C9D8-4E99-97AD-29AB63790489.jpeg',
    '78451AC2-E25B-40D3-80AC-60FA819505E3.jpeg',
    '52C16635-D0B5-4F1B-AB95-F6BB60BB8FD6.jpeg',
    '1A829E10-6D85-42E9-9159-92EFABF5B147.jpeg',
    'C3B48E2D-DADC-46A3-B2E4-6E6D068BA56A.jpeg',
    'AA96D357-F75C-4A2C-BF8D-3B66B6824733.jpeg',
    'BFE5AA45-6551-4D79-AFE6-FD0776CFF31E.jpeg',
    'C7913541-48EA-4404-AF13-19A593D4EDD6.jpeg',
    '65A33F13-F17B-4201-A6ED-61FB1F2283DC.jpeg',
  ],
  savory: [
    '088F9571-B29C-4AC1-832F-4E7AEBAC7EF3.jpeg',
    '6FBBA3B1-638E-473F-AD58-CFC4FE175DE9.jpeg',
    'BCB27326-838C-41FC-BF4B-17D8E11801CC.jpeg',
    'B050975B-6162-4114-9E9C-2EDA4852AA0E.jpeg',
    '1CCE05D4-BEBD-4B31-B41D-8383C8BC59C5.jpeg',
    '0D8BA3BB-3C9A-4D5C-861C-B68C47AE99BA.jpeg',
    '66EF8D42-CEA1-45F3-8E8A-B420E18DF130.jpeg',
    'B4EE402A-C344-4D22-B7B9-7AFE0C47CD2B.jpeg',
    'B3EC8159-A5D0-4EB4-8E1B-43010022590C.jpeg',
    'ECAEC8D6-B0F8-4548-98A4-23E2E54EE00F.jpeg',
    '61B2DB4F-A753-4082-9200-2861986E352E.jpeg',
    '98BD13C8-F935-45E8-9892-3A5337F1E59F.jpeg',
    'FE72D73A-FF16-4867-ABF5-1F2460402324.jpeg',
    '6DA2DEC7-A902-406C-98EC-1B82F1B96D69.jpeg',
    '76F8C898-52B5-4EF4-8ECA-139F2131C24A.jpeg',
    'DE9010E1-55D1-4EDB-A65F-0BF9673A361F.jpeg',
    '9C81DB2C-3E42-4135-9701-4476FEDE7929.jpeg',
    'F0BCF789-C06D-4C90-97F0-3C508C61F5AE.jpeg',
    '829B89EE-6472-4DE8-BB89-8846828840C1.jpeg',
    'CC3DC734-5F71-4B59-ACDB-77639EED7C51.jpeg',
    '6DC563CA-C1E4-4F41-A02D-FEDE34D84BAC.jpeg',
    'A2BD66AD-4E89-402E-ACE9-712F53210BFA.jpeg',
    '3DFB5B02-4A17-4D6F-948D-FF96A5F42194.jpeg',
    '4974E72D-A475-4E23-97F9-2654FE2F099C.jpeg',
    '88162547-517A-4307-89F3-A59CE07EE172.jpeg',
  ],
  drinks: [
    '990292FA-733A-4B58-BA1C-79FF0A788321.jpeg',
    '00EE2CC8-B358-4B07-82F6-6E122E9CD7D8.jpeg',
    '8C07267D-6781-4A25-B26B-5DE5EBB0E8EF.jpeg',
  ],
  professional: [
    'sitepro-1.jpeg',
    'sitepro-2.jpeg',
    'sitepro-4.jpeg',
    '14B2F697-C396-409E-B996-B27C20849162.jpeg',
    'AA56B84C-F52D-4600-82AD-101D19AAC7E7.jpeg',
    '9071E6BF-125B-45C2-BC64-1F3D3A44D6D1.jpeg',
    'F03CBE56-986C-422E-9E77-014F6FA1D8E7.jpeg',
    '8551BCB1-E99D-4E7B-A07F-A437B1E65342.jpeg',
    '13CB2B9E-B7BC-41CB-AB58-A3644A7344D2.jpeg',
    '36300E78-0910-47AA-A02A-AC5995B4E2C1.jpeg',
    'E044D8AF-4E1C-4D3F-9F21-3B59C27D69E5.jpeg',
    '92C1E233-4E15-499B-B50F-3264F12CBD9A.jpeg',
    'sitepro-7.jpeg',
    'sitepro-8.jpeg',
  ],
  // New real-event categories from the Siteweb drop
  babyshower: [
    'babyshower-1.jpeg',
    'babyshower-2.jpeg',
    'babyshower-3.jpeg',
  ],
  anniversaire: [
    'anniversaire-1.jpeg',
    'anniversaire-2.jpeg',
    'anniversaire-3.jpeg',
  ],
  soutenance: [
    'soutenance-1.jpeg',
    'soutenance-2.jpeg',
    'soutenance-3.jpeg',
    'soutenance-4.jpeg',
    '3A482B5A-B6B1-4674-81FC-5D8C293814D5.jpeg',
    'E95BD36C-D542-408D-9261-BD7FCA8A4A61.jpeg',
    'B2FCEE66-4C3C-473A-B56B-B84C36EC15C5.jpeg',
  ],
};

// ---- Tabs for the Galerie section ----
export const GALLERY_TABS = [
  { key: 'engagement', label: 'Fiançailles' },
  { key: 'babyshower', label: 'Baby Shower' },
  { key: 'anniversaire', label: 'Anniversaires' },
  { key: 'soutenance', label: 'Soutenances' },
  { key: 'dessert', label: 'Douceurs' },
  { key: 'savory', label: 'Buffet salé' },
  { key: 'decor', label: 'Décor & ambiance' },
  { key: 'professional', label: 'Professionnels' },
  { key: 'drinks', label: 'Boissons' },
];
