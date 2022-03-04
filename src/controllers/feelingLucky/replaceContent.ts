import {Octokit} from '@octokit/core';
import { GITHUB_OWNER_USERNAME, GITHUB_PERSONAL_ACCESS_TOKEN, GITHUB_REPOSITORY } from '../../env';

const octokit = new Octokit({ auth: GITHUB_PERSONAL_ACCESS_TOKEN });

const replaceContent = async (url: string) => {
  const queryReponse = await octokit.request(`GET /repos/{owner}/{repo}/readme`, {
    owner: GITHUB_OWNER_USERNAME,
    repo: GITHUB_REPOSITORY
  });

  const decodedContent = Buffer.from(queryReponse.data.content, 'base64').toString();

  const content = decodedContent.replace(/\[gyphy gif\]\(.*\)/g, `[gyphy gif](${url})`);
  
  try {
    await octokit.request('PUT /repos/{owner}/{repo}/contents/{path}',{
      owner: GITHUB_OWNER_USERNAME,
      repo: GITHUB_REPOSITORY,
      message: 'new giff',
      content: Buffer.from(content).toString('base64'),
      sha: queryReponse.data.sha,
      path: 'README.md'
    });
  } catch(e) {
    throw {data: e};
  }
};

export default replaceContent;