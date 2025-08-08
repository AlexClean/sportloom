import Image from "next/image";
import venumImg from "@/../public/images/reviews/best-boxing-gloves-2025/venum-challenger-2.jpg"
import adidasImg from "@/../public/images/reviews/best-boxing-gloves-2025/adidads-speed-tilt-150.jpg"
import everlastImg from "@/../public/images/reviews/best-boxing-gloves-2025/everlast-powerlock-2.jpg"
import hayabusaImg from "@/../public/images/reviews/best-boxing-gloves-2025/hayabusa-s4.jpg"
import heroImg from "@/../public/images/reviews/best-boxing-gloves-2025/Hero.jpg"
import { AnchorLink } from "@/app/components/common/button/InernalLinkButton/InternalLinkButtons";


export default async function ReviewPage() {


  return (
    <article className="review-grid">
      <header className="review-header rounded-2xl text-center">
        <h1 className="mx-auto m-4 max-w-4xl text-3xl sm:text-4xl font-extrabold">Best Boxing Gloves for Beginners in 2025 – Tested &amp; Reviewed</h1>
        <p className="mx-auto m-4 max-w-4xl text-lg sm:text-xl">
          Choosing your first pair of boxing gloves can be confusing. We cut through the noise by
          focusing on fit, wrist protection, padding quality and beginner comfort. Below are four
          Amazon-available models that consistently earn strong user feedback. Each pick includes
          quick specs for your shortlist and a deeper breakdown to help you decide.
        </p>
        <Image
          src={heroImg}
              alt="A focused male boxer in black and red gloves delivers a punch to a heavy bag in a modern gym."
              width={920}
              //height={800}
              className="rounded-xl m-auto"
              priority
              
        />
        <div className="mx-auto mt-6 grid max-w-4xl grid-cols-2 gap-3 sm:grid-cols-4">
          {/* <a href="#hayabusa-s4" className="header-link">
            <div className="font-semibold text-zinc-900 ">Comfort</div>
            <div className="text-zinc-600 transition group-hover:text-zinc-900">Hayabusa S4</div>
          </a> */}
          <AnchorLink href="#hayabusa-s4">
            Comfort -
            Hayabusa-s4
          </AnchorLink>
          {/* <a href="#venum-challenger-2" className="header-link">
            <div className="font-semibold text-zinc-900 ">Value</div>
            <div className="text-zinc-600 transition group-hover:text-zinc-900">Venum Challenger 2.0</div>
          </a> */}
          <AnchorLink href="#venum-challenger-2">Value - Venum Challenger 2.0</AnchorLink>
          {/* <a href="#everlast-powerlock-2" className="header-link">
            <div className="font-semibold text-zinc-900 ">Wrist Support</div>
            <div className="text-zinc-600 transition group-hover:text-zinc-900">Everlast Powerlock 2</div>
          </a> */}
          <AnchorLink href="#everlast-powerlock-2">Wrist Support Everlast Powerlock 2</AnchorLink>
          {/* <a href="#adidas-speed-tilt-150" className="header-link">
            <div className="font-semibold text-zinc-900 ">Speed/Pads</div>
            <div className="text-zinc-600 transition group-hover:text-zinc-900">Adidas Speed TILT 150</div>
          </a> */}
          <AnchorLink href="#adidas-speed-tilt-150">Speed/Pads - Adidas Speed TILT 150</AnchorLink>
        </div>
      </header>

      <div className="review-main bg-slate-50 rounded-xl p-6 dark:text-black">

        <section aria-labelledby="how-we-chose" id="how-we-chose" className="scroll-mt-24 my-10">
          <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 text-center">
            How We Chose the Winners
          </h2>

          <div className="mx-auto mt-4 max-w-5xl rounded-2xl border border-blue-200/60 bg-white p-5 shadow-sm ring-1 ring-blue-900/5">
            <p className="text-slate-700 leading-relaxed">
              We compared feel and support during bag work and drills, checked stitching and seams for early wear,
              and paid attention to breathability and interior comfort. Priority was given to predictable wrist alignment,
              easy on-off Velcro closures, and padding that protects beginner knuckles without feeling like pillows.
            </p>
          </div>
        </section>

        {/* Venum */}
        <section aria-labelledby="venum-challenger-2" className="">
          <header>
            <h2 id="venum-challenger-2" className="scroll-mt-22">
              Venum Challenger 2.0 Boxing Gloves – <strong>Best Value Pick</strong>
            </h2>
            <Image
              src={venumImg}
              alt="Venum Challenger 2.0 boxing gloves"
              width={360}
              className="rounded-xl ml-2"
              priority
              sizes="(min-width: 768px) 160px, 30vw"
            />
          </header>

          <div className="mt-4 space-y-2 text-xl">
            <h3 className="font-semibold">Why it stands out.</h3>
            <p>
              Venum’s Challenger 2.0 hits the beginner sweet spot:
              dependable wrist support, comfortable hand position and pricing that won’t punish
              newcomers. The triple-density foam disperses impact well on the heavy bag, and the wide
              Velcro strap cinches down evenly, so you don’t fight the glove while you’re learning form.
            </p>
            <h3 className="font-semibold">Fit &amp; comfort.</h3>
            <p>
              The interior is on the snug side in 10–12oz, which
              many beginners actually prefer because it reduces glove slop. If you’ve got wider hands,
              start at 14–16oz. The palm mesh helps with heat build-up; it’s not a wind tunnel, but it
              keeps sessions comfortable.
            </p>
            <h3 className="font-semibold">Durability &amp; use case.</h3>
            <p>
              Synthetic leather here is better-than-basic;
              you’ll see months of regular classes before notable wear if you let them dry between
              workouts. Ideal for bag work, mitts and light partner drills; for frequent sparring down
              the line you’ll want thicker, softer padding.
            </p>
            <h3 className="font-semibold">Bottom line.</h3>
            <p>
              A budget-friendly glove that doesn’t feel cheap — perfect
              for your first 6–12 months of training.
            </p>
          </div>


          <p className="mb-5">
            <a
              href="https://amzn.to/4mzheSu"
              target="_blank"
              rel="sponsored noopener nofollow"
              className="inline-flex items-center font-medium underline text-[#0077FF]"
              aria-label="View Venum Challenger 2.0 on Amazon (affiliate link)"
            >
              View on Amazon ➜
            </a>
          </p>
        </section>

        {/* Everlast */}
        <section aria-labelledby="everlast-powerlock-2">
          <header>
            <h2 id="everlast-powerlock-2" className="scroll-mt-22">
              Everlast Powerlock 2 Hook &amp; Loop – <strong>Best for Wrist Support</strong>
            </h2>
            <Image
              src={everlastImg}
              alt="Everlast Powerlock 2 boxing gloves"
              width={360}
              className="rounded-xl ml-2"
              priority
              sizes="(min-width: 768px) 160px, 30vw"
            />
          </header>

          <div className="mt-4 space-y-2 text-xl">
            <h3 className="font-semibold">Why it stands out.</h3>
            <p>
              Powerlock 2 lives up to its name: the wrist channel
              and strap geometry create a locked-in, straight wrist. If you’re worried about form or
              have had wrist tweaks in the past, this alignment gives confidence as you build volume on
              the bag.
            </p>

            <h3 className="review-tile__title">Fit &amp; padding.</h3>
            <p>
              The glove feels a touch denser than most “beginner”
              options. That means excellent structure and a slightly longer break-in, but the pay-off is
              stable knuckle landings and consistent feedback. Hook &amp; loop closure is stout and
              quick between rounds.
            </p>
            <h3 className="review-tile__title">Durability &amp; use case.</h3>
            <p>
              Engineered leather plus layered foam holds up
              well to class frequency. Heavier feel is fine for bag and pad work; for pure speed drills
              you may prefer a slimmer profile.
            </p>
            <h3 className="review-tile__title">Bottom line.</h3>
            <p>
              If “wrist integrity” is your #1 filter, this is the most
              confidence-inspiring glove in the lineup.
            </p>
          </div>


          <p className="mb-5">
            <a
              href="https://amzn.to/4fAkzyx"
              target="_blank"
              rel="sponsored noopener nofollow"
              className="inline-flex items-center font-medium underline text-[#0077FF]"
              aria-label="View Everlast Powerlock 2 on Amazon (affiliate link)"
            >
              View on Amazon ➜
            </a>
          </p>
        </section>

        {/* Hayabusa */}
        <section aria-labelledby="hayabusa-s4">
          <header>
            <h2 id="hayabusa-s4" className="scroll-mt-22">
              Hayabusa S4 PU Leather – <strong>Best Comfort for Beginners</strong>
            </h2>

            <Image
              src={hayabusaImg}
              alt="Hayabusa S4 boxing gloves"
              width={360}
              className="rounded-xl ml-2"
              priority
              sizes="(min-width: 768px) 160px, 30vw"
            />
          </header>
          <div className="mt-4 space-y-2 text-xl">
            <h3 className="review-tile__title">Why it stands out.</h3>
            <p>
              The S4 line is famous for its out-of-the-box comfort.
              Hand position is intuitive, the liner is smooth, and the strap ergonomics make cinching
              simple even with wraps on. It’s the glove we’d hand to a total newcomer and expect zero
              complaints after class one.
            </p>
            <h3 className="review-tile__title">Protection &amp; feel.</h3>
            <p>
              Injection-molded foam prioritizes knuckle comfort
              and spreads impact evenly. Wrist support is secure for a PU glove in this price lane, and
              the thumb track is natural — you don’t feel jammed or over-extended.
            </p>
            <h3 className="review-tile__title">Durability &amp; use case.</h3>
            <p>
              PU isn’t forever, but Hayabusa’s build quality
              is consistent. For 2–3 classes a week you’ll get a very solid run. Great for bag, mitts
              and technique sessions; for heavy sparring we’d step up to thicker, softer padding.
            </p>
            <h3 className="review-tile__title">Bottom line.</h3>
            <p>
              The friendliest first glove for comfort-focused beginners.
            </p>
          </div>
          

          <p className="mb-5">
            <a
              href="https://amzn.to/4mGDSbN"
              target="_blank"
              rel="sponsored noopener nofollow"
              className="inline-flex items-center font-medium underline text-[#0077FF]"
              aria-label="View Hayabusa S4 on Amazon (affiliate link)"
            >
              View on Amazon ➜
            </a>
          </p>
        </section>

        {/* Adidas */}
        <section aria-labelledby="adidas-speed-tilt-150">
          <header>
            <h2 id="adidas-speed-tilt-150" className="scroll-mt-22">
              Adidas Speed TILT 150 – <strong>Best for Speed &amp; Technique</strong>
            </h2>
            <Image
              src={adidasImg}
              alt="Adidas Speed TILT 150 boxing gloves"
              width={360}
              className="rounded-xl ml-2"
              priority
              sizes="(min-width: 768px) 160px, 30vw"
            />
          </header>
          <div className="mt-4 space-y-2 text-xl">
            <h3 className="review-tile__title">Why it stands out.</h3>
            <p>
              The Speed TILT 150 leans into quick hands. The slimmer
              silhouette gives crisp feedback on straight shots and makes pad drills feel snappy. If
              your classes skew toward technique and volume, this profile feels fast without being
              harsh.
            </p>
            <h3 className="review-tile__title">Fit &amp; materials.</h3>
            <p>
              <strong></strong> Interior space is neutral-to-slim; most beginners
              fit true to size. Multi-layer foam is tuned more for speed and precision than plush
              pillowy landings. Velcro wrap is simple and holds tension well.
            </p>
            <h3 className="review-tile__title">Durability &amp; use case.</h3>
            <p>
              As a speed-focused glove, it’s perfect for bag
              flow, mitts and shadowboxing with contact. Less ideal for heavy sparring days where extra
              softness is preferred.
            </p>
            <h3 className="review-tile__title">Bottom line.</h3>
            <p>
              A clean, brand-solid pick if you value fast hands and crisp
              feedback.
            </p>
          </div>
          

          <p className="mb-5">
            <a
              href="https://amzn.to/45vQknP"
              target="_blank"
              rel="sponsored noopener nofollow"
              className="inline-flex items-center font-medium underline text-[#0077FF]"
              aria-label="View Adidas Speed TILT 150 on Amazon (affiliate link)"
            >
              View on Amazon ➜
            </a>
          </p>
        </section>

        <section aria-labelledby="final-verdict" className="final-verdict">
          <header>
            <h2 id="final-verdict">Final Verdict</h2>
          </header>
          <ul className="grid gap-3">
            <li className="rounded-xl border border-emerald-200/60 bg-emerald-50/50 p-4 shadow-sm">
              <div className="flex items-start gap-3">
                <span aria-hidden>✅</span>
                <p className="text-zinc-800">
                  <strong>Hayabusa S4</strong> — If you want the safest bet for your very first pair, wins on
              comfort.
                  <span className="ml-2 inline-flex items-center rounded-full bg-emerald-100 px-2.5 py-0.5 text-xs font-medium text-emerald-800">Comfort</span>
                </p>
              </div>
            </li>
            <li className="rounded-xl border border-emerald-200/60 bg-emerald-50/50 p-4 shadow-sm">
              <div className="flex items-start gap-3">
                <span aria-hidden>💸</span>
                <p className="text-zinc-800">
                  <strong>Venum Challenger 2.0</strong> — For value is the go-to.
                  <span className="ml-2 inline-flex rounded-full bg-emerald-100 px-2.5 py-0.5 text-xs font-medium text-emerald-800">Value</span>
                </p>
              </div>
            </li>
            <li className="rounded-xl border border-emerald-200/60 bg-emerald-50/50 p-4 shadow-sm">
              <div className="flex items-start gap-3">
                <span aria-hidden>🛡️</span>
                <p className="text-zinc-800">
                  <strong>Everlast Powerlock 2</strong> — If wrist security tops your list.
                  <span className="ml-2 inline-flex rounded-full bg-emerald-100 px-2.5 py-0.5 text-xs font-medium text-emerald-800">Wrist Support</span>
                </p>
              </div>
            </li>
            <li className="rounded-xl border border-emerald-200/60 bg-emerald-50/50 p-4 shadow-sm">
              <div className="flex items-start gap-3">
                <span aria-hidden>⚡</span>
                <p className="text-zinc-800">
                  <strong>Adidas Speed TILT 150</strong> — If you prefer fast, technical work.
                  <span className="ml-2 inline-flex rounded-full bg-emerald-100 px-2.5 py-0.5 text-xs font-medium text-emerald-800">Speed/Pads</span>
                </p>
              </div>
            </li>
          </ul>

        </section>
      </div>
      
    </article>
  );
}
