import Daniel from './assets/image-daniel.jpg'
import Jeanette from './assets/image-jeanette.jpg'
import Jhonathan from './assets/image-jonathan.jpg'
import Kira from './assets/image-kira.jpg'
import Patrick from './assets/image-patrick.jpg'
import bgPattern from './assets/bg-pattern-quotation.svg'


function App() {
  return (
    <section>
      <div className='w-full min-h-screen flex items-center justify-center px-7 py-16'>
        <div class="container parent mx-auto">
          <div class="div1 shadow-[19px_36px_64px_15px_rgba(0,_0,_0,_0.1)] p-8 bg-Purple-500 rounded-xl relative">
            <div className='z-20 relative'>
              <div className='flex items-center gap-5 mb-5'>
                <div>
                  <img decoding='async' className='size-10 border-2 border-Grey-100/50 rounded-full' src={Daniel} alt="" />
                </div>
                <div className='flex flex-col gap-0'>
                  <span className='text-White block text-sm font-semibold'>Daniel Clifford</span>
                  <span className='text-White block text-sm'>Verified Graduate</span>
                </div>
              </div>
              <div className=''>
                <p className='text-White text-2xl font-semibold mb-5'>I received a job offer mid-course, and the subjects I learned were current, if not more so, in the company I joined. I honestly feel I got every penny’s worth.</p>
                <p className='text-White text-base font-thin'>“ I was an EMT for many years before I joined the bootcamp. I’ve been looking to make a transition and have heard some people who had an amazing experience here. I signed up for the free intro course and found it incredibly fun! I enrolled shortly thereafter. The next 12 weeks was the best - and most grueling - time of my life. Since completing the course, I’ve successfully switched careers, working as a Software Engineer at a VR startup. ”</p>
              </div>
            </div>
            <img decoding='async' className='hidden lg:block absolute top-0 right-16 z-10 size-32 object-cover' src={bgPattern} alt="" />
          </div>
          <div class="div2 shadow-[19px_36px_64px_15px_rgba(0,_0,_0,_0.1)] p-8 bg-Grey-500 rounded-xl">
            <div className='flex items-center gap-5 mb-5'>
              <div>
                <img decoding='async' className='size-10 border-2 border-Grey-100/50 rounded-full' src={Jhonathan} alt="" />
              </div>
              <div className='flex flex-col gap-0'>
                <span className='text-White block text-sm font-semibold'>Jonathan Walters</span>
                <span className='text-White block text-sm'>Verified Graduate</span>
              </div>
            </div>
            <div>
              <p className='text-White text-xl font-semibold mb-5'>The team was very supportive and kept me motivated</p>
              <p className='text-White text-base font-thin'>“ I started as a total newbie with virtually no coding skills. I now work as a mobile engineer for a big company. This was one of the best investments I’ve made in myself. ”</p>
            </div>
          </div>
          <div class="div3 shadow-[19px_36px_64px_15px_rgba(0,_0,_0,_0.1)] p-8 bg-White rounded-xl">
            <div className='flex items-center gap-5 mb-5'>
              <div>
                <img decoding='async' className='size-10 border-2 border-Grey-100/50 rounded-full' src={Jeanette} alt="" />
              </div>
              <div className='flex flex-col gap-0'>
                <span className='text-Dark-blue block text-sm font-semibold'>Jeanette Harmon</span>
                <span className='text-Dark-blue block text-sm'>Verified Graduate</span>
              </div>
            </div>
            <div>
              <p className='text-Dark-blue text-xl font-semibold mb-5'>An overall wonderful and rewarding experience</p>
              <p className='text-Dark-blue text-base'>“ Thank you for the wonderful experience! I now have a job I really enjoy, and make a good living while doing something I love. ”</p>
            </div>
          </div>
          <div class="div4 shadow-[19px_36px_64px_15px_rgba(0,_0,_0,_0.1)] p-8 bg-Dark-blue rounded-xl">
            <div className='flex items-center gap-5 mb-5'>
              <div>
                <img decoding='async' className='size-10 border-2 border-Purple-500 rounded-full' src={Patrick} alt="" />
              </div>
              <div className='flex flex-col gap-0'>
                <span className='text-White block text-sm font-semibold'>Patrick Abrams</span>
                <span className='text-White block text-sm'>Verified Graduate</span>
              </div>
            </div>
            <div>
              <p className='text-White text-2xl font-semibold mb-5'>Awesome teaching support from TAs who did the bootcamp themselves. Getting guidance from them and learning from their experiences was easy.</p>
              <p className='text-White text-base font-thin'>“ The staff seem genuinely concerned about my progress which I find really refreshing. The program  gave me the confidence necessary to be able to go out in the world and present myself as a capable  junior developer. The standard is above the rest. You will get the personal attention you need from  an incredible community of smart and amazing people. ”</p>
            </div>
          </div>
          <div class="div5 shadow-[19px_36px_64px_15px_rgba(0,_0,_0,_0.1)] p-8 bg-White rounded-xl">
            <div className='flex items-center gap-5 mb-5'>
              <div>
                <img decoding='async' className='size-10 border-2 border-Grey-100/50 rounded-full' src={Kira} alt="" />
              </div>
              <div className='flex flex-col gap-0'>
                <span className='text-Black block text-sm font-semibold'>Kira Whittle</span>
                <span className='text-Black block text-sm'>Verified Graduate</span>
              </div>
            </div>
            <div>
              <p className='text-Black text-2xl font-semibold mb-5'>Such a life-changing experience. Highly recommended!</p>
              <p className='text-Black text-base'>“ Before joining the bootcamp, I’ve never written a line of code. I needed some structure from  professionals who can help me learn programming step by step. I was encouraged to enroll by a former  student of theirs who can only say wonderful things about the program. The entire curriculum and staff  did not disappoint. They were very hands-on and I never had to wait long for assistance. The agile team  project, in particular, was outstanding. It took my learning to the next level in a way that no tutorial  could ever have. In fact, I’ve often referred to it during interviews as an example of my developent  experience. It certainly helped me land a job as a full-stack developer after receiving multiple offers. 100% recommend! ”</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default App