import React, { useEffect, useState } from 'react';
import axios from 'axios';

function App() {
  const [user, setUser] = useState(null);
  const [activeDiv, setActiveDiv] = useState(1);

  useEffect(() => {
    const fetchData = async () => {
      const result = await axios(
        'https://randomuser.me/api/?page=1&results=1&seed=abc'
      );
      setUser(result.data.results[0]);
    };

    fetchData();
  }, []);

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
            <div className="flex gap-32">
              <div
                className="cursor-pointer relative"
                onMouseOver={() => setActiveDiv(1)}
              >
                <div
                  style={{
                    width: 50,
                    height: 50,
                    backgroundImage: `url(/about.svg)`,
                    backgroundPosition: 'center',
                    backgroundSize: 'cover',
                    position:'absolute'
                  }}
                ></div>
              </div>
              <div
                className="cursor-pointer relative"
                onMouseOver={() => setActiveDiv(2)}
              >
                <div
                  style={{
                    width: 50,
                    height: 50,
                    backgroundImage: `url(/avatar.svg)`,
                    backgroundPosition: 'center',
                    backgroundSize: 'cover',
                    position:'absolute'
                  }}
                ></div>
              </div>
              <div
                className="cursor-pointer relative"
                onMouseOver={() => setActiveDiv(3)}
              >
                <div
                  style={{
                    width: 50,
                    height: 50,
                    backgroundImage: `url(/gender.svg)`,
                    backgroundPosition: 'center',
                    backgroundSize: 'cover',
                    position:'absolute'
                  }}
                ></div>
              </div>
              <div
                className="cursor-pointer relative"
                onMouseOver={() => setActiveDiv(4)}
              >
                <div
                  style={{
                    width: 50,
                    height: 50,
                    backgroundImage: `url(/phone.svg)`,
                    backgroundPosition: 'center',
                    backgroundSize: 'cover',
                    position:'absolute'
                  }}
                ></div>
              </div>
            </div>
          </div>
        )}
      </div>
    </>
  );
}

export default App;
