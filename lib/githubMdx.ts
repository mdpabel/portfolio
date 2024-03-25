import axios from 'axios';

type DataType = {
  name: string;
  content: string;
}[];

async function fetchMdxFiles() {
  const username = 'mdpabel';
  const repository = 'notes';
  const branch = 'main';
  const path = '';

  const url = `https://api.github.com/repos/${username}/${repository}/contents/${path}?ref=${branch}`;
  const token = process.env.GITHUB_TOKEN;

  try {
    const response = await axios.get<DataType>(url, {
      headers: {
        Authorization: `token ${token}`,
      },
    });

    const mdxFiles = response.data.filter((file: any) =>
      file.name.endsWith('.md'),
    );

    const mdxFileContents = await Promise.all(
      mdxFiles.map(async (file: any) => {
        const fileResponse = await axios.get(file.download_url);
        return {
          name: file.name,
          content: fileResponse.data,
        };
      }),
    );

    return mdxFileContents;
  } catch (error) {
    console.error('Error fetching MDX files:', error);
    return null;
  }
}

export default fetchMdxFiles;
