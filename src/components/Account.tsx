import React from 'react';
import './Account.css';

const Account: React.FC = () => {
  return (
    <section id="account">
      <h2 className="account-title">Account</h2>
      <ul className="account-links">
        <li>
          <a href="https://github.com/nanamisekiya" target="_blank" rel="noopener noreferrer">
            Git: nanamisekiya
          </a>
        </li>
        <li>
          <a href="https://qiita.com/na_mu_115" target="_blank" rel="noopener noreferrer">
            Qiita: na_mu_115
          </a>
        </li>
      </ul>
    </section>
  );
};

export default Account;
