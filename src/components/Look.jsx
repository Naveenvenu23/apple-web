import React from 'react'
import { Canvas } from '@react-three/fiber'
import { OrbitControls, useGLTF } from '@react-three/drei'

// Load the GLTF model
function IphoneModel() {
    const { scene } = useGLTF('/models/scene.gltf')
    return <primitive object={scene} scale={1.5} />
}

useGLTF.preload('/models/scene.gltf')
const Look = () => {
    return (
        <div className="h-screen w-screen" >
            <div className=" text-4xl lg:text-6xl font-bold p-16">
                <h1>Take a <span className='text-blue-500'>closer look.</span> </h1>
            </div>

            <div className="w-full h-[500px]">
                <Canvas camera={{ position: [0, 0, 21] }}>
                    <ambientLight intensity={0.5} />
                    <directionalLight position={[2, 2, 5]} intensity={1} />
                    <IphoneModel />
                    <OrbitControls enableZoom={false} />
                </Canvas>
            </div>
            <div className='mt-32 mb-10'>
                <img
                    src='./public/my-images.jpg/iphone1.jpg'

                />

            </div>


            <div className='text-4xl lg:text-7xl  font-bold ' style={{ backgroundColor: '#CAD5F8', color: 'black' }}>
                <h1 className='text-center p-10 lg:p-32'>Take total Camera Control.<br />
                    <span className='text-blue-500'>Touch. Zoom. Click. Quick.</span></h1>
            </div>

            <div className="flex justify-center ">
                <video width="vh" height="360" autoPlay muted loop>
                    <source src="./public/my-images.jpg/vid1.mp4" type="video/mp4" />
                    Your browser does not support the video tag.
                </video>
            </div>
            <div className='lg:p-10 w-8/12 ml-10 lg:ml-80 mt-36 flex flex-col gap-10'>
                <p className='text-black '>Now you can take the perfect photo or video in record time. Camera Control gives you an easier way to quickly access camera tools. Simply slide your finger to adjust camera functions like exposure or depth of field, and toggle through each lens or use digital zoom to frame your shot — just how you like it.</p>
                <a href='#' className='text-4xl mt-16'>How to use Camera Control</a>
            </div>
            <div className='flex gap-10 justify-center mt-10 overflow-hidden'>
                <div>
                    <img
                        src="/my-images.jpg/apple7.gif"
                        alt="iPhone 16 Camera Control"
                        className="w-full max-w-md"
                    />
                </div>
                <div>
                    <img
                        src="/my-images.jpg/apple7.gif"
                        alt="iPhone 16 Camera Control"
                        className="w-full max-w-md"
                    />
                </div>
                <div>
                    <img
                        src="/my-images.jpg/apple7.gif"
                        alt="iPhone 16 Camera Control"
                        className="w-full max-w-md"
                    />
                </div>
            </div>


            <div className='w-full flex justify-center items-center mt-20 lg:mt-60 px-4'>
                <div className='bg-white w-full max-w-5xl shadow-xl rounded-2xl '>
                    <img
                        src="/my-images.jpg/iphone16.webp"
                        alt="iPhone 16 Camera Control"
                        className="w-screen mx-auto"
                    />
                    <div className='mt-6  lg:top-10 lg:right-10 p-4 '>
                        <p className='text-black text-lg md:text-xl lg:text-2xl font-bold'>
                       <span className='lg:text-7xl text-pink-600'> Action button.<br /></span>    
                           <span className='lg:text-8xl mb-5'>Do more. Wait less.<br /></span> 
                          The Action button on iPhone 16 is a fast track to your favorite feature. Just press and hold to launch the action you want — the flashlight, a voice memo, Silent mode, and more. You can also set up Shortcuts to open an app, run a series of tasks, or change actions depending on the time of day or your location. Or use it to take actions in an app, like setting an alarm or even ordering your favorite coffee drink.
                        </p>
                    </div>
                </div>
            </div>

           <div className='flex flex-col gap-8 items-center my-16 px-4'>
  <img
    src='/my-images.jpg/appleai.png'
    className='w-full max-w-4xl object-cover'
    alt="AI Feature"
  />
  <img
    src='/my-images.jpg/appleai2.jpg'
    className='w-full max-w-4xl object-cover'
    alt="AI Feature 2"
  />
</div>

        <div className="w-full">
  {/* Heading & Select */}
  <div className="flex flex-col lg:flex-row justify-between items-center px-4 lg:px-20 py-10 -mt-16" style={{ backgroundColor: '#CAD5F8', color: 'black' }}>
    <div className="text-3xl md:text-4xl lg:text-6xl font-bold text-center lg:text-left mb-6 lg:mb-0">
      <h1>There’s never been<br />a better time to upgrade.</h1>
    </div>
    <div className="font-bold text-center lg:text-left">
      <label htmlFor="options" className="block mb-2">Select an iPhone to<br />compare to iPhone 16:</label>
      <select id="options" name="options" className="w-64 h-10 rounded-3xl text-center text-black">
        <option value="option1">iPhone 11</option>
        <option value="option2">iPhone 12</option>
        <option value="option3">iPhone 13</option>
        <option value="option4">iPhone 14</option>
        <option value="option5">iPhone 12 Pro</option>
        <option value="option6">iPhone 15 Pro</option>
      </select>
    </div>
  </div>

  {/* Feature Cards */}
  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 px-4 lg:px-20 py-10">
    
    {/* Card 1 */}
    <div className="rounded-2xl text-black shadow-2xl font-bold text-xl p-6 flex flex-col items-center justify-center text-center">
      <p>
        Up to<br />
        <span className="text-4xl font-bold">10 more hours</span><br />
        <i className="fa-solid fa-battery-three-quarters fa-4x my-4"></i><br />
        video playback on iPhone 16 Plus
      </p>
    </div>

    {/* Card 2 */}
    <div className="rounded-2xl text-black shadow-2xl font-bold text-xl p-6 flex flex-col items-center justify-center text-center">
      <p>
        Up to<br />
        <span className="text-4xl font-bold">60% Faster</span><br />
        6-core CPU
      </p>
    </div>

    {/* Card 3 */}
    <div className="rounded-2xl text-black shadow-2xl font-bold text-xl p-6 flex flex-col items-center justify-center text-center">
      <i className="fa-solid fa-mobile-screen fa-4x mb-4"></i>
      <p>
        Camera Control<br />
        Take the perfect photo<br />
        in record time
      </p>
    </div>

    {/* Card 4 */}
    <div className="rounded-2xl text-black shadow-2xl font-bold text-xl p-6 flex flex-col items-center justify-center text-center">
      <p>Dynamic Island<br />Bubbles up alerts<br />and Live Activities</p>
      <img
        src="/my-images.jpg/apple11 (1).jpg"
        alt="Dynamic Island"
        className="w-28 h-28 object-cover mt-6 rounded-lg"
      />
    </div>

    {/* Card 5 */}
    <div className="rounded-2xl text-black shadow-2xl font-bold text-xl p-6 flex flex-col items-center justify-center text-center">
      <p>Latest‑generation<br />Ceramic Shield</p>
      <img
        src="/my-images.jpg/apple11 (2).jpg"
        alt="Ceramic Shield"
        className="w-28 h-28 object-cover mt-6 rounded-lg"
      />
    </div>

    {/* Card 6 */}
    <div className="rounded-2xl text-black shadow-2xl font-bold text-xl p-6 flex flex-col items-center justify-center text-center">
      <img
        src="/my-images.jpg/apple11 (3).png"
        alt="Apple Intelligence"
        className="w-28 h-28 object-cover mb-4 rounded-lg"
      />
      <p>Built for<br />Apple Intelligence</p>
    </div>

  </div>
</div>


            <footer className='bg-gray-400 mt-28 p-14 text-xs'>
                <ol class="list-decimal pl-6 space-y-2 text-black ml-96 hidden lg:block">
                    <li>Apple Intelligence is available in beta on iPhone 16 models, iPhone 15 Pro, and iPhone 15 Pro Max with iOS 18 and select languages.</li>
                    <li>The display measures 6.12 inches (iPhone 16) or 6.69 inches (iPhone 16 Plus) diagonally as a standard rectangle.</li>
                    <li>Visual intelligence is available in iOS 18.2 or later on iPhone 16 series, and later updates on other supported devices.</li>
                    <li>Accessories are sold separately.</li>
                    <li>Charging tests were done with USB‑C cables, Apple power adapters, and MagSafe chargers in August 2024.</li>
                    <li>Battery life depends on many factors and may vary; battery has limited recharge cycles and may need replacement.</li>
                    <li>iPhone 16 and 16 Plus are IP68 rated; water and dust resistance may decrease over time and liquid damage isn’t covered under warranty.</li>
                    <li>iPhone 16 and 16 Pro can detect severe car crashes and call for help with a network or Wi-Fi connection.</li>
                    <li>Packaging uses mass balance allocation; adhesives, inks, and coatings are excluded from plastic content calculation.</li>
                    <li>Increased pallet box count does not apply to U.S., Puerto Rico, Virgin Islands, Guam, and Canada.</li>
                    <li>Ultra Wideband features require a compatible iPhone and Apple Watch; availability varies by region.</li>
                    <li>Battery life claims refer to larger models and vary by use and network configuration.</li>
                    <li>Honor of Kings: World will be released at a later date.</li>
                    <li>Features may change and are not available in all regions or languages; specific hardware/software may be required.</li>
                </ol>
                <hr className='text-black mt-8' />

                <div className='flex gap-20 justify-center mt-10 '>
                    <div className='flex flex-col gap-5 text-xs '>
                        <a href="#">Store</a>
                        <a href="#">Mac</a>
                        <a href="#">iPad</a>
                        <a href="#">iPhone</a>
                        <a href="#">Watch</a>
                        <a href="#">AirPods</a>
                        <a href="#">TV & Home</a>
                        <a href="#">AirTag</a>
                        <a href="#">Accessories</a>


                    </div>
                    <div className='flex flex-col gap-5 text-xs'>
                        <a href="#">Shopping Help</a>
                        <a href="#">For Business</a>
                        <a href="#">Apple and Business</a>
                        <a href="#">Environment</a>
                        <a href="#">Privacy</a>
                        <a href="#">Supply Chain</a>
                        <a href="#">About Apple</a>
                        <a href="#">Investors</a>
                        <a href="#">Ethics & Compliance</a>
                        <a href="#">Events</a>
                        <a href="#">Contact Apple</a>

                    </div>
                    <div className='flex flex-col gap-5 text-xs'>
                        <a href="#">Gift Cards</a>
                        <a href="#">Apple Wallet</a>
                        <a href="#">Wallet</a>
                        <a href="#">Account</a>
                        <a href="#">Manage Your Apple Account</a>
                        <a href="#">Apple Store Account</a>
                        <a href="#">iCloud.com</a>
                        <a href="#">Entertainment</a>
                    </div>

                    <div className='flex flex-col gap-5 text-xs'>
                        <a href="#">Apple One</a>
                        <a href="#">Apple Books</a>
                        <a href="#">App Store</a>
                        <a href="#">Apple Store</a>
                        <a href="#">Apple Store App</a>
                        <a href="#">Apple Recycling Program</a>
                        <a href="#">Order Status</a>

                    </div>
                </div>
                <hr className='text-black mt-8' />

                <div className='flex justify-around mt-10'>
                    <div>Copyright © 2025 Apple Inc. All rights reserved.</div>
                    <div>
                        <a href="#">Privacy Policy</a>
                        <a href="#">Terms of Use</a>
                        <a href="#">Sales and Refunds</a>
                        <a href="#">Legal</a>
                        <a href="#">Site Map</a>

                    </div>
                    <div>
                        <a>Philiphines</a>
                    </div>
                </div>

            </footer>








        </div>
    )
}

export default Look;
