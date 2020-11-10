import React, { useState, useEffect } from 'react';
import './styles/app.css';
import 'chart.js';

const App = (props) => {


  const [notificationOpen, setnotificationOpen] = useState(false)
  const [dropdownOpen, setdropdownOpen] = useState(false)
  const [Info, setInfo] = useState('');
  const [Vote, setVote] = useState('');
  const [transaction, settransaction] = useState([])

  // api call for  wallet
  useEffect(() => {
    var axios = require('axios');
    var config = {
      method: 'get',
      url: 'https://api.ark.io/api/wallets/AXzxJ8Ts3dQ2bvBR1tPE7GUee9iSEJb8HX',
      headers: {
        'Content-Type': 'application/json',
      }
    };

    axios(config)
      .then(function (response) {
        if (response.data) {   setInfo(response.data.data)   }
      })
      .catch(function (error) {
        console.log(error);
      });

  }, [])

  // api call for  votes count
  useEffect(() => {
    var axios = require('axios');
    var config = {
      method: 'get',
      url: 'https://api.ark.io/api/votes?page=1&limit=2',
      headers: {
        'Content-Type': 'application/json',
      }
    };

    axios(config)
      .then(function (response) {
        if (response.data) {  setVote(response.data.meta)   }
      })
      .catch(function (error) {
        console.log(error);
      });
  }, [])

  // api call for  transactions

  useEffect(() => {
    var axios = require('axios');

    var config = {
      method: 'get',
      url: 'https://api.ark.io/api/transactions?page=1&limit=100',
      headers: {
        'Content-Type': 'application/json'
      }
    };

    axios(config)
      .then(function (response) {
        if (response.data) {   settransaction(response.data) }
      })
      .catch(function (error) {
        console.log(error);
      });

  }, [])



  return (
    
    <div className=" flex items-center justify-center overflow-hidden  " style={{ background: '#edf2f7' }}>
      <div>
        <script src="https://cdn.jsdelivr.net/gh/alpinejs/alpine@v2.x.x/dist/alpine.min.js" defer></script>
        <div class="flex bg-gray-400">

          <div className="flex-1 flex flex-col  overflow-hidden ">
            <header className="flex justify-between items-center py-4 px-6 bg-white border-b-4 border-indigo-600 ">
              <div className="flex items-center">
                <button className="text-gray-500 focus:outline-none lg:hidden">
                  <svg className="h-6 w-6" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M4 6H20M4 12H20M4 18H11" stroke="currentColor" stroke-width="2"
                      stroke-linecap="round" stroke-linejoin="round"></path>
                  </svg>
                </button>

                <div className="relative mx-4 lg:mx-0">

                  <div className="flex items-center pl-10">
                    <svg className="h-12 w-12" viewBox="0 0 512 512" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M364.61 390.213C304.625 450.196 207.37 450.196 147.386 390.213C117.394 360.22 102.398 320.911 102.398 281.6C102.398 242.291 117.394 202.981 147.386 172.989C147.386 230.4 153.6 281.6 230.4 307.2C230.4 256 256 102.4 294.4 76.7999C320 128 334.618 142.997 364.608 172.989C394.601 202.981 409.597 242.291 409.597 281.6C409.597 320.911 394.601 360.22 364.61 390.213Z" fill="#4C51BF" stroke="#4C51BF" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"></path>
                      <path d="M201.694 387.105C231.686 417.098 280.312 417.098 310.305 387.105C325.301 372.109 332.8 352.456 332.8 332.8C332.8 313.144 325.301 293.491 310.305 278.495C295.309 263.498 288 256 275.2 230.4C256 243.2 243.201 320 243.201 345.6C201.694 345.6 179.2 332.8 179.2 332.8C179.2 352.456 186.698 372.109 201.694 387.105Z" fill="white"></path>
                    </svg>
                    <span className="text-gray text-2xl mx-2 font-semibold">ARK Wallet</span>
                  </div>
                </div>
              </div>

              <div className="flex items-center">
                <div className="relative">
                  <button onClick={() => setnotificationOpen(!notificationOpen)}
                    className="flex mx-4 text-gray-600 focus:outline-none">
                    <svg className="h-6 w-6" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path
                        d="M15 17H20L18.5951 15.5951C18.2141 15.2141 18 14.6973 18 14.1585V11C18 8.38757 16.3304 6.16509 14 5.34142V5C14 3.89543 13.1046 3 12 3C10.8954 3 10 3.89543 10 5V5.34142C7.66962 6.16509 6 8.38757 6 11V14.1585C6 14.6973 5.78595 15.2141 5.40493 15.5951L4 17H9M15 17V18C15 19.6569 13.6569 21 12 21C10.3431 21 9 19.6569 9 18V17M15 17H9"
                        stroke="currentColor" stroke-width="2" stroke-linecap="round"
                        stroke-linejoin="round">
                      </path>
                    </svg>
                  </button>

                  <div x-show={notificationOpen} onClick={() => setnotificationOpen(false)}
                    className="fixed inset-0 h-full w-full z-10" style={{ display: 'none' }}></div>
                </div>

                <div className="relative">
                  <button onClick={() => setdropdownOpen(!dropdownOpen)}
                    className="relative block h-8 w-8 rounded-full overflow-hidden shadow focus:outline-none">
                    <img className="h-full w-full object-cover"
                      src="https://images.unsplash.com/photo-1528892952291-009c663ce843?ixlib=rb-1.2.1&amp;ixid=eyJhcHBfaWQiOjEyMDd9&amp;auto=format&amp;fit=crop&amp;w=296&amp;q=80"
                      alt="Your avatar" />
                  </button>
                </div>
              </div>
            </header>
            <main className="flex-1  bg-gray-200 container pl-10">
              <div className="container mx-auto px-6 py-8 pl-10">
                <h3 className="text-gray-700 text-3xl font-medium pl-10 ">Dashboard</h3>
                <div className="mt-4 pl-10 ">
                  <div className="flex flex-wrap -mx-6">
                    <div className="w-full px-6 sm:w-1/2 xl:w-1/3 sm:mt-0 mb-5  br-10 pl-5">
                      <div className="flex items-center px-5 py-6 shadow-sm rounded-md bg-white">
                        <div className="p-2 rounded-full bg-indigo-600 bg-opacity-75">
                          <img style={{ minWidth: '20px', maxWidth: '80px' }} src="https://moworks.com.au/perch/resources/zu-iconsanimation-wallet.gif" alt="" />
                        </div>
                  <div className="mx-5">
                          <h4 className="text-2xl font-semibold text-gray-700" >{Info.balance ? Info.balance.length < 6 ? Info.balance : parseFloat((
                            Math.floor(("" + Info.balance).length / 3) !== 0 ? (Info.balance / Math.pow(1000, Math.floor(("" + Info.balance).length / 3))) : Info.balance).toPrecision(2))
                            : 0}{Info.balance < 6 ? ' ' : Info.balance < 9 ? ' M ' : Info.balance < 12 ? ' B ' : Info.balance < 15 ? ' T ' : ' Q '}</h4>
                          <div className="text-gray-500">Wellet money</div>
                        </div>
                      </div>
                    </div>

                    <div className="w-full mt-6 px-6 sm:w-1/2 xl:w-1/3 sm:mt-0 br-10 mb-5 ">
                      <div className="flex items-center px-5 py-6 shadow-sm rounded-md bg-white">
                        <div className="p-2 rounded-full bg-orange-600 bg-opacity-75">
                          <img style={{ minWidth: '20px', maxWidth: '80px' }} src="https://www.univoxcommunity.com/Content/Univox/Home/images/home/icons/Fastedemptions.gif" alt="" />
                        </div>

                        <div className="mx-5">
                          <h4 className="text-2xl font-semibold text-gray-700">{Info.balance ? Info.balance.length < 6 ? Info.balance : parseFloat((
                            Math.floor(("" + Info.balance).length / 3) !== 0 ? (Info.balance / Math.pow(1000, Math.floor(("" + Info.balance).length / 3))) : Info.balance).toPrecision(2)) / 2
                            : 0}{Info.balance < 6 ? ' ' : Info.balance < 9 ? ' M ' : Info.balance < 12 ? ' B ' : Info.balance < 15 ? ' T ' : ' Q '}</h4>
                          <div className="text-gray-500">Total Rewards</div>
                        </div>
                      </div>
                    </div>


                    <div className="w-full mt-6 px-6 sm:w-1/2 xl:w-1/3 sm:mt-0  br-10 mb-5 ">
                      <div className="flex items-center px-5 py-6 shadow-sm rounded-md bg-white">
                        <div className="p-2 rounded-full bg-yellow-600 bg-opacity-75">
                          <img style={{ minWidth: '20px', maxWidth: '80px' }} src="https://media0.giphy.com/media/L3uKSvELhbllHT1XIa/giphy.gif" alt="" />
                        </div>

                        <div className="mx-5">
                          <h4 className="text-2xl font-semibold text-gray-700">{Vote.totalCount}&nbsp;Votes&nbsp;</h4>
                          <div className="text-gray-500">Total votes</div>
                        </div>
                      </div>
                    </div>

                  </div>
                </div>

             
                <div className=" mt-8 pl-10  overflow-y-auto overflow-y-hidden " >
                  <div className="-my-2 py-2  sm:-mx-6 sm:px-6 lg:-mx-8 lg:px-8">
                    <h3 className="text-gray-700 text-3xl font-medium">Transactions</h3>
                    <div
                      className="align-middle inline-block min-w-full shadow overflow-y-auto  sm:rounded-lg border-b border-gray-200 " style={{ height: '500px' }}>
                      <table className="min-w-full">
                        <thead>
                          <tr>
                            <th
                              className="px-6 py-3 border-b border-gray-200 bg-gray-50 text-left text-xs leading-4 font-medium text-gray-500 uppercase tracking-wider">
                              Identification</th>
                            <th
                              className="px-6 py-3 border-b border-gray-200 bg-gray-50 text-left text-xs leading-4 font-medium text-gray-500 uppercase tracking-wider">
                              Ammount</th>
                            <th
                              className="px-6 py-3 border-b border-gray-200 bg-gray-50 text-left text-xs leading-4 font-medium text-gray-500 uppercase tracking-wider">
                              Fee</th>
                            <th
                              className="px-6 py-3 border-b border-gray-200 bg-gray-50 text-left text-xs leading-4 font-medium text-gray-500 uppercase tracking-wider">
                              Confirms</th>
                            <th className="px-6 py-3 border-b border-gray-200 bg-gray-50"></th>
                          </tr>
                        </thead>



                        {transaction.data && transaction.data.length > 0 ? transaction.data.map((items) => {
                          return <tbody className="bg-white" key={items.id}> <tr>
                            <td className="px-6 py-4 whitespace-no-wrap border-b border-gray-200">
                              <div className="flex items-center">
                                <div className="flex-shrink-0 h-10 w-10">
                                  <img className="h-10 w-10 rounded-full"
                                    src="https://cdn0.iconfinder.com/data/icons/online-money-service-orchid-volume-2/256/Minimum_Transaction_Amount-512.png"
                                    alt="" />
                                </div>

                                <div className="ml-4">
                                  <div className="text-sm leading-5 font-medium text-gray-900">
                                    {items.id.slice(0, 10)}XXXX
                                                  </div>
                                  {/* <div className="text-sm leading-5 text-gray-500">
                                                      john@example.com</div> */}
                                </div>
                              </div>
                            </td>

                            <td className="px-6 py-4 whitespace-no-wrap border-b border-gray-200">
                              <div className="text-sm leading-5 text-gray-900"> {items.amount}</div>
                              <div className="text-sm leading-5 text-gray-500">Version {items.version}</div>
                            </td>

                            <td className="px-6 py-4 whitespace-no-wrap border-b border-gray-200">
                              <span
                                className="px-2 inline-flex text-xs leading-5 font-semibold rounded-full bg-green-100 text-green-800">{items.fee}</span>
                            </td>

                            <td
                              class="px-6 py-4 whitespace-no-wrap border-b border-gray-200 text-sm leading-5 text-gray-500">
                              {items.confirmations}</td>

                            {/* <td
                                          className="px-6 py-4 whitespace-no-wrap text-right border-b border-gray-200 text-sm leading-5 font-medium">
                                          <a href="#" class="text-indigo-600 hover:text-indigo-900"></a>
                                      </td> */}
                          </tr>  </tbody>
                        }) : <div className=" content-center"><h3 className='text-center mt-10'>All Transactions are loading...</h3></div> 
                        }


                      </table>
                    </div>
                  </div>
                </div>
              </div>
            </main>
          </div>
        </div>
      </div>
    </div>

  );
}

export default App;
