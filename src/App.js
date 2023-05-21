import React from 'react';
import './App.css';
import Header from './Header.js';
import Technologies from './Technologies.js';

const App = () => {
  return (
    <div className='app-wrapper'>
      <header className='header'>
        <img src='https://www.heisenberg.shop/media/logo/websites/4/hnbg-black.png' />
      </header>
      <nav className='nav'>
        <div>
          <a>Profile</a>
        </div>
        <div>
          <a>Messages</a>
        </div>
        <div>
          <a>News</a>
        </div>
        <div>
          <a>Music</a>
        </div>
        <div>
          <a>Settings</a>
        </div>
      </nav>
      <div className='content'>
        <img src="https://images.theconversation.com/files/32113/original/zddchmvm-1380482556.jpg?ixlib=rb-1.1.0&q=45&auto=format&w=1356&h=668&fit=crop" />
        <div>
          ava + description
        </div>
        <div>
          My posts
          <div>
            New post
          </div>
          <div>
            <div>
              post 1
            </div>
            <div>
              post 2
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default App;
