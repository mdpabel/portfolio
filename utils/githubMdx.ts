type DataType = {
  name: string;
  content: string;
  githubUrl: string;
}[];

async function fetchMdxFiles() {
  const username = 'mdpabel';
  const repository = 'notes';
  const branch = 'main';
  const path = '';
  const url = `https://api.github.com/repos/${username}/${repository}/contents/${path}?ref=${branch}`;
  const token = process.env.GITHUB_TOKEN;

  try {
    const response = await fetch(url, {
      headers: {
        Authorization: `token ${token}`,
      },
      next: {
        tags: ['notes'],
      },
      cache: 'force-cache',
    });

    if (!response.ok) {
      throw new Error('Failed to fetch MDX files');
    }

    const data: DataType = await response.json();

    const mdxFiles = data.filter((file) => file.name.endsWith('.md'));

    const mdxFileContents = await Promise.all(
      mdxFiles.map(async (file: any) => {
        const fileResponse = await fetch(file.download_url);

        if (!fileResponse.ok) {
          throw new Error(`Failed to fetch content for ${file.name}`);
        }

        const content = await fileResponse.text();
        return {
          name: file.name,
          content: content,
          githubUrl: file.html_url,
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
