/**
 * Copyright (c) 2017-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

const React = require('react');

const CompLibrary = require('../../core/CompLibrary.js');

const Container = CompLibrary.Container;
const GridBlock = CompLibrary.GridBlock;
const MarkdownBlock = CompLibrary.MarkdownBlock;

function Help(props) {
  const { config: siteConfig, language = '' } = props;
  const { baseUrl, docsUrl } = siteConfig;
  const docsPart = `${docsUrl ? `${docsUrl}/` : ''}`;
  const langPart = `${language ? `${language}/` : ''}`;
  const docUrl = doc => `${baseUrl}${docsPart}${langPart}${doc}`;

  const supportLinks = [
    {
      content: `Learn more using the [documentation on this site.](${docUrl(
        'doc1.html'
      )})`,
      title: 'Browse Docs',
    },
    {
      content: 'Ask questions about the documentation and project',
      title: 'Join the community',
    },
    {
      content: "Find out what's new with this project",
      title: 'Stay up to date',
    },
  ];

  return (
    <div className="docMainWrapper wrapper">
      <Container className="mainContainer documentContainer postContainer">
        <div className="post">

          <header className="postHeader">
            <h1>Need help?</h1>
          </header>
          <MarkdownBlock>
            This project is based on Facebook Open Source [Docusaurus](https://github.com/facebook/docusaurus) by a dedicated group of people.
          </MarkdownBlock>

          <header className="postHeader">
            <h1>Want to contribute?</h1>
          </header>

          <MarkdownBlock>
            Minimal requirement to contribute to this project is to have little bit knowledge of markdown.
            Incase you don't, you will find this [Markdown Documentation](https://guides.github.com/features/mastering-markdown/) really helpful.
          </MarkdownBlock>
          <MarkdownBlock>
            First thing you need to do is to fork this project from [here](https://github.com/navneetlal/spacenditure).
          </MarkdownBlock>
          <MarkdownBlock>
            You can add your blogs by just creating a `your-blog.md` file in the `blog/` directory and
            then submit by creating a pull request.
          </MarkdownBlock>
          <p>Always add following detail on top of your blog.</p>
          <p>
            <code style={{ display: 'block' }}>
              --- <br/>
              title: Blog Title <br/>
              author: Blog Author <br/>
              authorURL: http://twitter.com/ <br/>
              authorFBID: 100002976521003 <br/>
              ---   
            </code>
          </p>
          <p>This detail will be used to show that you own that blog.</p>
          <MarkdownBlock>You can also edit articles in the `article/` directory.</MarkdownBlock>
          
          <header className="postHeader">
            <h1>Contributors</h1>
          </header>
          <p>This project is maintained by a dedicated group of people.</p>
          <GridBlock contents={supportLinks} layout="threeColumn" />
        </div>
      </Container>
    </div>
  );
}

module.exports = Help;
