import React from 'react';

interface FooterColumnProps {
  title: string;
  links?: { name: string; url: string }[];
  children?: React.ReactNode;
  text : string;
}

const FooterColumn: React.FC<FooterColumnProps> = ({ title, links, children,text }) => {
  return (
    <div className="mb-8 md:mb-0">
      <h4 className={`font-bold   ${text}`}>{title}</h4>
      {links ? (
        <ul>
          {links.map((link, index) => (
            <li key={index} className="mb-2">
              <a href={link.url} className="text-gray-600 hover:text-gray-800">
                {link.name}
              </a>
            </li>
          ))}
        </ul>
      ) : (
        children
      )}
    </div>
  );
};

export default FooterColumn;