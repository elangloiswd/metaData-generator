const tabSpacing = "   ";
const newLine = "\n";

const formatLine = (line) => {
  return `${tabSpacing}${line}${newLine}`;
};

export const generateSocialMetaTags = (metaData) => {
  const { title, description, url, imageUrl } = metaData;
  let socialMetaData = formatLine("");
  socialMetaData += formatLine("<!-- Essential Social Meta Tags -->");
  socialMetaData += formatLine(
    `<meta property="og:title" content="${title}"/>`
  );
  socialMetaData += formatLine(
    `<meta property="og:description" content="${description}"/>`
  );
  socialMetaData += formatLine(
    `<meta property="og:image" content="${imageUrl}"/>`
  );
  socialMetaData += formatLine(`<meta property="og:url" content="${url}"/>`);
  socialMetaData += formatLine(
    `<meta property="twitter:card" content="${imageUrl}"/>`
  );
  socialMetaData += formatLine(
    `<meta property="og:site_name" content="${title}"/>`
  );
  socialMetaData += formatLine(
    `<meta property="twitter:image:alt" content="${title}"/>`
  );

  return socialMetaData;
};

export const generateMetaTags = (metaData) => {
  const { title, description, keywords, author, url } = metaData;
  const formattedKeywords = Array.isArray(keywords)
    ? keywords.join(", ")
    : keywords;

  let generatedMetaTags = `<head>${newLine}`;
  generatedMetaTags += formatLine(`<title>${title}</title>`);
  generatedMetaTags += formatLine(
    `<meta name="description" content="${description}"/>`
  );
  generatedMetaTags += formatLine(
    `<meta name="keywords" content="${formattedKeywords}"/>`
  );
  generatedMetaTags += formatLine(`<meta name="author" content="${author}"/>`);
  generatedMetaTags += formatLine(`<link rel="canonical" href="${url}"/>`);
  generatedMetaTags += formatLine(
    `<meta name="robots" content="index, follow"/>`
  );
  generatedMetaTags += generateSocialMetaTags(metaData);
  generatedMetaTags += "</head>";

  return generatedMetaTags;
};
