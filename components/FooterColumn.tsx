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
      <h4 className={`font-bold text-[#254d3c] ${text}`}>{title}</h4>
      {links ? (
        <ul>
          {links.map((link, index) => (
            <li key={index} className="mb-2">
              <a href={link.url} className="inline-flex text-sm text-[#56665a] transition hover:translate-x-1 hover:text-[#254d3c]">
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
