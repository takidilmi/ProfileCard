import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { motion } from 'framer-motion';

function App() {
  const [user, setUser] = useState(null);
  const [activeDiv, setActiveDiv] = useState(1);
  const [expandedDiv, setExpandedDiv] = useState(null);
  const [disableHover, setDisableHover] = useState(false);
  let hoverTimeout;

  useEffect(() => {
    const fetchData = async () => {
      const result = await axios(
        'https://randomuser.me/api/?page=1&results=1&seed=abc'
      );
      setUser(result.data.results[0]);
    };

    fetchData();
  }, []);

  const handleMouseOver = (divIndex) => {
    if (!disableHover) {
      setActiveDiv(divIndex);
      setExpandedDiv(divIndex);
      setDisableHover(true);

      // Disable handleMouseOver for 500ms
      hoverTimeout = setTimeout(() => {
        setDisableHover(false);
      }, 500);
    }
  };

  return (
    <>
      <div className="flex justify-center text-balance items-center h-screen">
        {user && (
          <div className="flex p-3 flex-col gap-4 items-center justify-center">
            <div className="w-32 h-32 rounded-full overflow-hidden">
              <img
                src={user.picture.large}
                alt="User"
              />
            </div>
            <div className="flex flex-col h-12 text-center items-center overflow-y-scroll hide-scrollbar">
              {activeDiv === 1 && (
                <div>
                  <p>Hi, My name is</p>
                  <h2>
                    {user.name.first} {user.name.last}
                  </h2>
                </div>
              )}
              {activeDiv === 2 && (
                <div>
                  <p>I am {user.dob.age} years old</p>
                  <p>{new Date(user.dob.date).toISOString().split('T')[0]}</p>
                </div>
              )}
              {activeDiv === 3 && (
                <div>
                  <p>I identify as</p>
                  <p>{user.gender}</p>
                </div>
              )}
              {activeDiv === 4 && (
                <div>
                  <p>My phone number is</p>
                  <p>{user.phone}</p>
                </div>
              )}
            </div>
            <div className="flex mr-8 gap-32">
              <div className="cursor-pointer relative">
                <motion.div
                  className="cursor-pointer relative"
                  onMouseOver={() => handleMouseOver(1)}
                  animate={{
                    width: expandedDiv === 1 ? 500 : 50,
                    height: expandedDiv === 1 ? 500 : 50,
                    top: expandedDiv === 1 ? -350 : 0,
                    zIndex: expandedDiv === 1 ? -1 : 0,
                  }}
                  transition={{ duration: 0.5 }}
                  style={{
                    backgroundImage: `url(/about.svg)`,
                    backgroundPosition: 'center',
                    backgroundSize: 'cover',
                    position: 'absolute',
                  }}
                ></motion.div>
              </div>

              <div className="cursor-pointer relative">
                <motion.div
                  className="cursor-pointer relative"
                  onMouseOver={() => handleMouseOver(2)}
                  animate={{
                    width: expandedDiv === 2 ? 500 : 50,
                    height: expandedDiv === 2 ? 500 : 50,
                    top: expandedDiv === 2 ? -350 : 0,
                    left: expandedDiv === 2 ? -150 : 0,
                    zIndex: expandedDiv === 2 ? -1 : 0,
                  }}
                  transition={{ duration: 0.5 }}
                  style={{
                    backgroundImage: `url(/avatar.svg)`,
                    backgroundPosition: 'center',
                    backgroundSize: 'cover',
                    position: 'absolute',
                  }}
                ></motion.div>
              </div>

              <div className="cursor-pointer relative">
                <motion.div
                  className="cursor-pointer relative"
                  onMouseOver={() => handleMouseOver(3)}
                  animate={{
                    width: expandedDiv === 3 ? 500 : 50,
                    height: expandedDiv === 3 ? 500 : 50,
                    top: expandedDiv === 3 ? -350 : 0,
                    left: expandedDiv === 3 ? -280 : 0,
                    zIndex: expandedDiv === 3 ? -1 : 0,
                  }}
                  transition={{ duration: 0.5 }}
                  style={{
                    backgroundImage: `url(/gender.svg)`,
                    backgroundPosition: 'center',
                    backgroundSize: 'cover',
                    position: 'absolute',
                  }}
                ></motion.div>
              </div>

              <div className="cursor-pointer relative">
                <motion.div
                  className="cursor-pointer relative"
                  onMouseOver={() => handleMouseOver(4)}
                  animate={{
                    width: expandedDiv === 4 ? 500 : 50,
                    height: expandedDiv === 4 ? 500 : 50,
                    top: expandedDiv === 4 ? -350 : 0,
                    left: expandedDiv === 4 ? -450 : 0,
                    zIndex: expandedDiv === 4 ? -1 : 0,
                  }}
                  transition={{ duration: 0.5 }}
                  style={{
                    backgroundImage: `url(/phone.svg)`,
                    backgroundPosition: 'center',
                    backgroundSize: 'cover',
                    position: 'absolute',
                  }}
                ></motion.div>
              </div>
            </div>
          </div>
        )}
      </div>
    </>
  );
}

export default App;
