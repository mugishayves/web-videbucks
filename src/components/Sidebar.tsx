import React from 'react'
import logo from "../assets/logo.svg"
import { Link, useLocation } from 'react-router-dom'
import clsx from 'clsx'
const Sidebar: React.FC = () => {
	const path = useLocation()
	return (
		<div className='bg-[#FAFAFA] h-screen w-[22vw] overflow-hidden'>
			<div className="flex flex-col justify-between h-full">
				<div>
					<div className="flex gap-2 p-4 items-center">
						<img src={logo} alt="" />
						<p className='font-bold text-2xl text-[#111]'>Videbucks</p>
					</div>
					<div className="p-2 flex items-center justify-center">
						<button className='flex gap-2 bg-gradient-to-br from-[#D7DF4D] to-[#E179CB] px-4 py-1.5 rounded-lg'>
							<svg xmlns="http://www.w3.org/2000/svg" width="24" height="25" viewBox="0 0 24 25" fill="none">
								<path d="M5.2236 5.70084C5.3323 5.59536 5.47844 5.53736 5.62989 5.53961C5.78133 5.54186 5.92569 5.60417 6.0312 5.71284C6.14657 5.83315 6.20987 5.99408 6.2074 6.16075C6.20493 6.32742 6.13688 6.4864 6.018 6.60324C4.46624 8.17328 3.59722 10.2926 3.6 12.5C3.6 14.888 4.596 17.0432 6.1968 18.572C6.25861 18.6292 6.30843 18.698 6.34333 18.7746C6.37824 18.8512 6.39754 18.9339 6.40011 19.0181C6.40268 19.1022 6.38847 19.186 6.3583 19.2645C6.32813 19.3431 6.28261 19.4149 6.2244 19.4756C6.12117 19.5823 5.98042 19.6444 5.83207 19.6489C5.68373 19.6534 5.53948 19.5998 5.43 19.4996C4.47225 18.6028 3.70907 17.5187 3.18784 16.3146C2.6666 15.1105 2.39844 13.8121 2.4 12.5C2.4 9.84324 3.48 7.43844 5.2236 5.70084ZM17.982 6.60324C17.8633 6.48624 17.7955 6.32717 17.7932 6.1605C17.791 5.99384 17.8545 5.833 17.97 5.71284C18.0755 5.60454 18.2196 5.54246 18.3707 5.54021C18.5219 5.53796 18.6678 5.59573 18.7764 5.70084C19.6726 6.59162 20.3836 7.65107 20.8682 8.81805C21.3528 9.98503 21.6015 11.2364 21.6 12.5C21.6 15.26 20.436 17.7488 18.57 19.4996C18.4605 19.5998 18.3163 19.6534 18.1679 19.6489C18.0196 19.6444 17.8788 19.5823 17.7756 19.4756C17.7176 19.4149 17.6722 19.3432 17.6422 19.2647C17.6121 19.1863 17.5979 19.1026 17.6005 19.0187C17.6031 18.9347 17.6223 18.8521 17.6571 18.7756C17.6919 18.6991 17.7416 18.6303 17.8032 18.5732C18.6251 17.7898 19.2791 16.8474 19.7255 15.8034C20.1719 14.7594 20.4014 13.6355 20.4 12.5C20.4028 10.2922 19.5338 8.17372 17.982 6.60324ZM7.3584 7.80804C7.46534 7.7062 7.60835 7.65101 7.75598 7.65461C7.90361 7.65821 8.04376 7.72031 8.1456 7.82724C8.3952 8.07684 8.37 8.48724 8.124 8.73924C7.14477 9.74598 6.59785 11.0956 6.6 12.5C6.6 14.048 7.2516 15.4448 8.2968 16.43C8.5608 16.6784 8.5968 17.1032 8.3388 17.3612C8.23991 17.4641 8.10525 17.5249 7.96272 17.5312C7.8202 17.5374 7.68072 17.4886 7.5732 17.3948C6.88819 16.7768 6.34074 16.0217 5.96636 15.1784C5.59198 14.3352 5.39902 13.4227 5.4 12.5C5.39868 11.6271 5.57117 10.7627 5.9074 9.95712C6.24364 9.15155 6.73689 8.42099 7.3584 7.80804ZM15.876 8.73924C15.63 8.48724 15.6048 8.07684 15.8544 7.82724C15.9562 7.72031 16.0964 7.65821 16.244 7.65461C16.3917 7.65101 16.5347 7.7062 16.6416 7.80804C17.263 8.42112 17.7561 9.1517 18.0923 9.95723C18.4285 10.7628 18.6011 11.6272 18.6 12.5C18.6013 13.4228 18.4086 14.3355 18.0344 15.1789C17.6603 16.0224 17.1129 16.7777 16.428 17.396C16.32 17.4902 16.1799 17.539 16.0368 17.5323C15.8937 17.5256 15.7587 17.4639 15.66 17.36C15.4032 17.1032 15.4392 16.6784 15.7032 16.43C16.2397 15.9258 16.6671 15.3169 16.9589 14.6409C17.2508 13.9649 17.4009 13.2363 17.4 12.5C17.4021 11.0956 16.8552 9.74598 15.876 8.73924ZM12 11C11.6022 11 11.2206 11.1581 10.9393 11.4394C10.658 11.7207 10.5 12.1022 10.5 12.5C10.5 12.8979 10.658 13.2794 10.9393 13.5607C11.2206 13.842 11.6022 14 12 14C12.3978 14 12.7794 13.842 13.0607 13.5607C13.342 13.2794 13.5 12.8979 13.5 12.5C13.5 12.1022 13.342 11.7207 13.0607 11.4394C12.7794 11.1581 12.3978 11 12 11Z" fill="white" />
							</svg>
							<p className='text-xl text-white font-semibold'>Stream now</p>
						</button>
					</div>
					<div className="flex flex-col font-medium text-xl">
						<Link to={"/main"}>
							<div className={clsx('flex  gap-4 px-4 py-2 text-[rgba(0,0,0,0.51)] hover:text-[#FF48ED] hover:fill-[#FF48ED]', path.pathname == "/main" && "bg-[rgba(0,0,0,0.07)]  text-black border-r-2 border-[#FF48ED]")}>
								<svg xmlns="http://www.w3.org/2000/svg" width="26" height="26" viewBox="0 0 26 26" fill="none">
									<path d="M11.9492 2.80606C12.2428 2.55737 12.6152 2.4209 13 2.4209C13.3848 2.4209 13.7572 2.55737 14.0508 2.80606L22.1758 9.69931C22.3557 9.85183 22.5003 10.0417 22.5995 10.2557C22.6986 10.4697 22.75 10.7028 22.75 10.9386V21.1252C22.75 21.5562 22.5788 21.9695 22.274 22.2743C21.9693 22.579 21.556 22.7502 21.125 22.7502H14.8958C14.6803 22.7502 14.4737 22.6646 14.3213 22.5122C14.1689 22.3599 14.0833 22.1532 14.0833 21.9377V15.1669H11.9167V21.9377C11.9167 22.1532 11.8311 22.3599 11.6787 22.5122C11.5263 22.6646 11.3197 22.7502 11.1042 22.7502H4.875C4.44402 22.7502 4.0307 22.579 3.72595 22.2743C3.4212 21.9695 3.25 21.5562 3.25 21.1252V10.9386C3.25 10.462 3.46017 10.0081 3.82417 9.69931L11.9492 2.80606ZM13 4.04539L4.875 10.9386V21.1252H10.2917V14.3544C10.2917 14.1389 10.3773 13.9322 10.5296 13.7799C10.682 13.6275 10.8887 13.5419 11.1042 13.5419H14.8958C15.1113 13.5419 15.318 13.6275 15.4704 13.7799C15.6227 13.9322 15.7083 14.1389 15.7083 14.3544V21.1252H21.125V10.9386L13 4.04539Z" fill="black" />
								</svg>
								<p>Home Page</p>
							</div>
						</Link>
						<Link to={"/main/streams"}>
							<div className={clsx('flex  gap-4 px-4 py-2 text-[rgba(0,0,0,0.51)] hover:text-[#FF48ED] hover:fill-[#FF48ED]', path.pathname == "/main/streams" && "bg-[rgba(0,0,0,0.07)]  text-black  border-r-2 border-[#FF48ED]")}>
								<svg xmlns="http://www.w3.org/2000/svg" width="26" height="26" viewBox="0 0 26 26" className={clsx("fill-[rgba(0,0,0,0.51)] hover:fill-[#FF48ED]", path.pathname == "/main/streams" && "fill-black")}>
									<path fillRule="evenodd" clipRule="evenodd" d="M14.5342 6.20122C12.1688 5.95277 9.78501 5.93435 7.41615 6.14622L5.83415 6.28722C5.19934 6.34415 4.60223 6.61334 4.13921 7.05133C3.67618 7.48931 3.37425 8.07055 3.28215 8.70122C2.90595 11.2742 2.90595 13.8882 3.28215 16.4612C3.37446 17.092 3.67659 17.6732 4.13978 18.1112C4.60298 18.5492 5.20022 18.8183 5.83515 18.8752L7.41715 19.0152C9.78598 19.2275 12.1698 19.2094 14.5352 18.9612L15.1432 18.8972C15.7467 18.8339 16.3141 18.5793 16.7627 18.1705C17.2112 17.7618 17.5172 17.2203 17.6362 16.6252L20.6832 18.2432C20.7925 18.3013 20.9146 18.3314 21.0385 18.3309C21.1624 18.3303 21.2842 18.299 21.393 18.2399C21.5019 18.1808 21.5944 18.0956 21.6623 17.992C21.7302 17.8884 21.7714 17.7696 21.7822 17.6462L21.8071 17.3622C22.086 14.1807 22.086 10.9808 21.8071 7.79922L21.7822 7.51522C21.7713 7.39177 21.73 7.27293 21.662 7.16934C21.5939 7.06574 21.5013 6.98062 21.3923 6.92158C21.2834 6.86254 21.1615 6.83143 21.0375 6.83101C20.9136 6.8306 20.7915 6.86091 20.6821 6.91922L17.6362 8.53722C17.5172 7.94215 17.2112 7.40069 16.7627 6.99193C16.3141 6.58317 15.7467 6.32854 15.1432 6.26522L14.5342 6.20122ZM7.55015 7.64022C9.82218 7.43711 12.1086 7.45486 14.3772 7.69322L14.9852 7.75722C15.2822 7.78867 15.5604 7.91806 15.7758 8.12499C15.9913 8.33193 16.1318 8.60466 16.1752 8.90022C16.5332 11.3412 16.5332 13.8202 16.1752 16.2622C16.1318 16.5578 15.9913 16.8305 15.7758 17.0374C15.5604 17.2444 15.2822 17.3738 14.9852 17.4052L14.3772 17.4692C12.1086 17.7076 9.82218 17.7254 7.55015 17.5222L5.96815 17.3802C5.66916 17.3535 5.38787 17.227 5.16963 17.0209C4.95138 16.8148 4.8089 16.5412 4.76515 16.2442C4.40999 13.8151 4.40999 11.3473 4.76515 8.91822C4.80852 8.621 4.95086 8.34709 5.16916 8.14077C5.38746 7.93445 5.66896 7.80777 5.96815 7.78122L7.55015 7.64022ZM17.8322 10.1312C17.9812 11.7612 17.9812 13.4012 17.8322 15.0312L20.3792 16.3842C20.5605 13.8521 20.5605 11.3103 20.3792 8.77822L17.8322 10.1312Z" />
								</svg>
								<p>Streams</p>
							</div>
						</Link>
						<Link to={"/main/streamers"}>
							<div className={clsx('flex  gap-4 px-4 py-2 text-[rgba(0,0,0,0.51)] hover:text-[#FF48ED] hover:fill-[#FF48ED]', path.pathname == "/main/streamers" && "bg-[rgba(0,0,0,0.07)] text-black   border-r-2 border-[#FF48ED]")}>
								<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" className={clsx("fill-[rgba(0,0,0,0.51)] hover:fill-[#FF48ED]", path.pathname == "/main/streamers" && "fill-black")}>
									<path d="M20 11.943C20 7.562 16.424 4 12 4C7.576 4 4 7.562 4 11.943C4 13.133 4.147 13.898 4.328 14.459C4.45 14.831 4.741 14.464 4.885 14.329C5.35747 13.8859 5.98345 13.6435 6.6311 13.6529C7.27874 13.6622 7.89749 13.9225 8.357 14.379C9.778 15.791 11.089 17.749 9.278 19.549C8.306 20.515 6.842 20.917 5.728 19.877C4.29 18.533 3.041 16.969 2.426 15.077C2.17 14.283 2 13.304 2 11.942C2 6.445 6.483 2 12 2C17.517 2 22 6.445 22 11.943C22 13.305 21.831 14.284 21.574 15.076C20.959 16.969 19.71 18.533 18.272 19.876C17.158 20.917 15.694 20.516 14.722 19.549C12.912 17.749 14.222 15.791 15.642 14.379C16.1016 13.9222 16.7205 13.6617 17.3684 13.6524C18.0163 13.6431 18.6425 13.8856 19.115 14.329C19.392 14.589 19.529 14.899 19.672 14.459C19.853 13.899 20 13.132 20 11.943Z" />
								</svg>
								<p>Streamers</p>
							</div>
						</Link>
						<Link to={"/main/friends"}>
							<div className={clsx('flex  gap-4 px-4 py-2 text-[rgba(0,0,0,0.51)] hover:text-[#FF48ED] hover:fill-[#FF48ED]', path.pathname == "/main/friends" && "bg-[rgba(0,0,0,0.07)] text-black   border-r-2 border-[#FF48ED]")}>
								<svg xmlns="http://www.w3.org/2000/svg" width="26" height="26" viewBox="0 0 26 26" className={clsx("fill-[rgba(0,0,0,0.51)] hover:fill-[#FF48ED]", path.pathname == "/main/friends" && "fill-black")}>
									<path d="M23.8753 21.8683C22.266 19.0861 19.7859 17.0911 16.8917 16.1454C18.3233 15.2931 19.4356 13.9945 20.0577 12.4489C20.6799 10.9033 20.7774 9.19628 20.3355 7.58988C19.8935 5.98348 18.9365 4.56657 17.6113 3.55674C16.2861 2.54691 14.6661 2 13 2C11.3339 2 9.71389 2.54691 8.38871 3.55674C7.06353 4.56657 6.10647 5.98348 5.66452 7.58988C5.22256 9.19628 5.32013 10.9033 5.94226 12.4489C6.56438 13.9945 7.67666 15.2931 9.10827 16.1454C6.21405 17.09 3.73404 19.085 2.12473 21.8683C2.06571 21.9645 2.02656 22.0716 2.0096 22.1832C1.99264 22.2948 1.9982 22.4087 2.02595 22.5181C2.05371 22.6275 2.1031 22.7303 2.17121 22.8203C2.23932 22.9103 2.32477 22.9858 2.42252 23.0423C2.52027 23.0987 2.62834 23.135 2.74035 23.1491C2.85236 23.1631 2.96605 23.1545 3.0747 23.1239C3.18335 23.0933 3.28476 23.0412 3.37296 22.9707C3.46116 22.9003 3.53435 22.8129 3.58822 22.7137C5.57899 19.2731 9.09771 17.219 13 17.219C16.9023 17.219 20.421 19.2731 22.4118 22.7137C22.4657 22.8129 22.5388 22.9003 22.627 22.9707C22.7152 23.0412 22.8167 23.0933 22.9253 23.1239C23.034 23.1545 23.1476 23.1631 23.2596 23.1491C23.3717 23.135 23.4797 23.0987 23.5775 23.0423C23.6752 22.9858 23.7607 22.9103 23.8288 22.8203C23.8969 22.7303 23.9463 22.6275 23.974 22.5181C24.0018 22.4087 24.0074 22.2948 23.9904 22.1832C23.9734 22.0716 23.9343 21.9645 23.8753 21.8683ZM7.08263 9.61092C7.08263 8.44057 7.42968 7.29651 8.07989 6.3234C8.7301 5.3503 9.65426 4.59185 10.7355 4.14398C11.8168 3.69611 13.0066 3.57893 14.1544 3.80725C15.3023 4.03557 16.3567 4.59915 17.1842 5.42671C18.0118 6.25427 18.5753 7.30864 18.8037 8.4565C19.032 9.60435 18.9148 10.7941 18.4669 11.8754C18.0191 12.9567 17.2606 13.8808 16.2875 14.531C15.3144 15.1812 14.1703 15.5283 13 15.5283C11.4311 15.5266 9.927 14.9026 8.81764 13.7933C7.70829 12.6839 7.08431 11.1798 7.08263 9.61092Z" fill="black" fill-opacity="0.51" />
								</svg>
								<p>Friends</p>
							</div>
						</Link>
						<Link to={"/main/chats"}>
							<div className={clsx('flex  gap-4 px-4 py-2 text-[rgba(0,0,0,0.51)] hover:text-[#FF48ED] hover:fill-[#FF48ED]', path.pathname == "/main/chats" && "bg-[rgba(0,0,0,0.07)] text-black   border-r-2 border-[#FF48ED]")}>
								<svg xmlns="http://www.w3.org/2000/svg" width="24" height="25" viewBox="0 0 24 25" fill='none'>
									<path d="M7.12128 20.6533L3.15799 21.9744L2.20931 22.2906L2.52554 21.3419L3.84673 17.3783C2.80754 15.6419 2.34893 13.6167 2.54146 11.5981C2.74159 9.49973 3.63388 7.52754 5.07788 5.99199C6.52188 4.45644 8.43555 3.44473 10.5176 3.11615C12.5997 2.78757 14.732 3.16077 16.5787 4.177C18.4254 5.19324 19.8817 6.79478 20.7183 8.7295C21.5548 10.6642 21.7242 12.8222 21.1998 14.8638C20.6753 16.9054 19.4867 18.7145 17.8212 20.0064C16.1559 21.2982 14.1083 21.9995 12.0007 22L7.12128 20.6533ZM7.12128 20.6533C8.59365 21.5363 10.2801 22.0026 12 22L7.12128 20.6533Z" stroke="black" stroke-opacity="0.51" />
								</svg>
								<p>Chats</p>
							</div>
						</Link>
						<Link to={"/main/challenges"}>
							<div className={clsx('flex  gap-4 px-4 py-2 text-[rgba(0,0,0,0.51)] hover:text-[#FF48ED] hover:fill-[#FF48ED]', path.pathname == "/main/challenges" && "bg-[rgba(0,0,0,0.07)] text-black   border-r-2 border-[#FF48ED]")}>
								<svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20" fill="none">
									<g clip-path="url(#clip0_910_946)">
										<path d="M5.33317 19.3332H14.6665M9.99984 19.3332V12.6665M9.99984 12.6665C11.4143 12.6665 12.7709 12.1046 13.7711 11.1044C14.7713 10.1042 15.3332 8.74766 15.3332 7.33317V1.99984C15.3332 1.64622 15.1927 1.30708 14.9426 1.05703C14.6926 0.80698 14.3535 0.666504 13.9998 0.666504H5.99984C5.64621 0.666504 5.30708 0.80698 5.05703 1.05703C4.80698 1.30708 4.6665 1.64622 4.6665 1.99984V7.33317C4.6665 8.74766 5.22841 10.1042 6.2286 11.1044C7.22879 12.1046 8.58535 12.6665 9.99984 12.6665ZM4.6665 3.33317H3.33317C2.62593 3.33317 1.94765 3.61412 1.44755 4.11422C0.947455 4.61432 0.666504 5.29259 0.666504 5.99984C0.666504 6.70708 0.947455 7.38536 1.44755 7.88545C1.94765 8.38555 2.62593 8.6665 3.33317 8.6665H4.6665M15.3332 3.33317H16.6665C17.3737 3.33317 18.052 3.61412 18.5521 4.11422C19.0522 4.61432 19.3332 5.29259 19.3332 5.99984C19.3332 6.70708 19.0522 7.38536 18.5521 7.88545C18.052 8.38555 17.3737 8.6665 16.6665 8.6665H15.3332" stroke="black" stroke-opacity="0.51" />
									</g>
									<defs>
										<clipPath id="clip0_910_946">
											<rect width="20" height="20" fill="white" />
										</clipPath>
									</defs>
								</svg>
								<p>Challenges</p>
							</div>
						</Link>
					</div>
				</div>
				<div className='font-medium text-xl'>
					<button className={clsx('flex  gap-4 px-4 py-2 text-black')}>
						<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
							<path d="M12 16L7 11L8.4 9.55L11 12.15V4H13V12.15L15.6 9.55L17 11L12 16ZM6 20C5.45 20 4.979 19.804 4.587 19.412C4.195 19.02 3.99934 18.5493 4 18V15H6V18H18V15H20V18C20 18.55 19.804 19.021 19.412 19.413C19.02 19.805 18.5493 20.0007 18 20H6Z" fill="black" />
						</svg>
						<p>Mobile App</p>
					</button>
					<Link to={"/main/plans"}>
						<div className={clsx('flex  gap-4 px-4 py-2 text-[rgba(0,0,0,0.51)] text-[#FF48ED] hover:fill-[#FF48ED] bg-[rgba(215,223,77,0.12)]')}>
							<svg xmlns="http://www.w3.org/2000/svg" width="26" height="26" viewBox="0 0 26 26" fill="none">
								<path d="M23.6172 9.78385C23.4518 9.63961 23.2472 9.54778 23.0295 9.52004C22.8117 9.49229 22.5907 9.52987 22.3943 9.62801L17.7916 11.9198L13.9488 5.5368C13.85 5.37301 13.7106 5.23752 13.5441 5.14347C13.3775 5.04942 13.1895 5 12.9982 5C12.8069 5 12.6189 5.04942 12.4524 5.14347C12.2858 5.23752 12.1464 5.37301 12.0476 5.5368L8.2048 11.9225L3.6039 9.63076C3.40804 9.53349 3.18781 9.49624 2.97086 9.52367C2.7539 9.55111 2.54988 9.64201 2.38439 9.78497C2.21891 9.92793 2.09934 10.1166 2.04068 10.3273C1.98202 10.5379 1.98689 10.7612 2.05468 10.9691L5.44646 21.3608C5.48056 21.4652 5.53768 21.5606 5.61359 21.64C5.6895 21.7194 5.78226 21.7807 5.88504 21.8194C5.98781 21.8581 6.09797 21.8732 6.20738 21.8637C6.31679 21.8541 6.42265 21.8201 6.51716 21.7642C6.54008 21.7504 8.88407 20.4001 12.9982 20.4001C17.1123 20.4001 19.4563 21.7504 19.4774 21.7632C19.572 21.8197 19.678 21.8542 19.7877 21.8641C19.8974 21.874 20.0079 21.859 20.111 21.8204C20.2141 21.7817 20.3072 21.7203 20.3834 21.6408C20.4595 21.5612 20.5168 21.4655 20.5509 21.3608L23.9426 10.9719C24.0124 10.7639 24.0187 10.5399 23.9607 10.3283C23.9028 10.1168 23.7832 9.92725 23.6172 9.78385ZM19.4151 20.1095C18.315 19.6429 16.1223 18.9334 12.9982 18.9334C9.8741 18.9334 7.68137 19.6429 6.58133 20.1095L3.71299 11.3248L7.84454 13.3846C8.09462 13.508 8.38182 13.5332 8.64956 13.4553C8.9173 13.3774 9.14617 13.2021 9.29108 12.9639L12.9982 6.80184L16.7053 12.962C16.8504 13.1999 17.0791 13.3749 17.3465 13.4527C17.614 13.5306 17.9009 13.5056 18.151 13.3828L22.2834 11.3248L19.4151 20.1095ZM17.3864 17.1761C17.3565 17.3457 17.2678 17.4994 17.1359 17.6102C17.004 17.721 16.8373 17.7819 16.665 17.782C16.622 17.782 16.579 17.7783 16.5367 17.771C14.1942 17.3689 11.8004 17.3689 9.45792 17.771C9.26634 17.8048 9.06918 17.7611 8.90982 17.6496C8.75045 17.538 8.64194 17.3677 8.60815 17.1761C8.57435 16.9845 8.61805 16.7874 8.72962 16.628C8.84119 16.4686 9.0115 16.3601 9.20308 16.3263C11.7142 15.8949 14.2804 15.8949 16.7915 16.3263C16.9827 16.3599 17.1528 16.4679 17.2645 16.6267C17.3762 16.7855 17.4204 16.982 17.3873 17.1733L17.3864 17.1761Z" fill="#E179CB" />
							</svg>
							<p>Get Premium</p>
						</div>
					</Link>
					<div className="p-2 flex items-center justify-center">
						<button className='flex gap-2 bg-gradient-to-br from-[#D7DF4D] to-[#E179CB] px-4 py-1.5 rounded-lg'>
							<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
								<path d="M17 10H20M20 10H23M20 10V7M20 10V13M1 20V19C1 17.1435 1.7375 15.363 3.05025 14.0503C4.36301 12.7375 6.14348 12 8 12M8 12C9.85652 12 11.637 12.7375 12.9497 14.0503C14.2625 15.363 15 17.1435 15 19V20M8 12C9.06087 12 10.0783 11.5786 10.8284 10.8284C11.5786 10.0783 12 9.06087 12 8C12 6.93913 11.5786 5.92172 10.8284 5.17157C10.0783 4.42143 9.06087 4 8 4C6.93913 4 5.92172 4.42143 5.17157 5.17157C4.42143 5.92172 4 6.93913 4 8C4 9.06087 4.42143 10.0783 5.17157 10.8284C5.92172 11.5786 6.93913 12 8 12Z" stroke="white" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
							</svg>
							<p className='text-xl text-white font-semibold'>Invite a friend</p>
						</button>
					</div>
				</div>
			</div>
		</div>
	)
}

export default Sidebar