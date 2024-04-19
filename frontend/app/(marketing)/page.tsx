"use client";

import { Button } from "@/components/ui/button";
import { ConnectButton } from "@rainbow-me/rainbowkit";
import Image from "next/image";
import Link from "next/link";
import Header from "./Header";
import { useAccount } from "wagmi";
import { useEffect } from "react";
import { useRouter } from "next/navigation";

export default function Delete() {
  const { status } = useAccount(),
    router = useRouter();
  useEffect(() => {
    status == "connected" ? router.push("/dash") : null;
  }, [status]);

  return (
    <div className="grid  flex-col min-h-[100dvh] ">
      <Header />
      <section className="w-full py-12 md:py-24 lg:py-32">
        <div className="container px-4 md:px-6">
          <h1>Cuberhack: Personalized Learning with Blockchain and AI (MVP)</h1>

          <p>
            Cuberhack is building a revolutionary personalized learning system
            built on Klaytn that leverages the power of blockchain and AI to
            create an engaging and rewarding educational experience. Our Minimum
            Viable Product (MVP) focuses on core functionalities to validate the
            concept and gather user feedback for future iterations.
          </p>

          <h2>Key Features:</h2>

          <ul>
            <li>
              <h3>Personalized Learning Paths:</h3>
              <p>
                AI analyzes student performance data (stored securely on the
                blockchain) to identify strengths, weaknesses, and learning
                styles. Based on this analysis, the system recommends
                personalized learning paths with curated content (text, videos,
                quizzes) tailored to individual needs.
              </p>
            </li>
            <li>
              <h3>Interactive Learning Modules:</h3>
              <p>
                The platform offers interactive learning modules that leverage
                gamification elements to boost engagement. Modules may include
                quizzes, interactive exercises, and simulations that provide
                immediate feedback and track progress.
              </p>
            </li>
            <li>
              <h3>Secure Blockchain Ledger:</h3>
              <p>
                Student performance data, including completed modules, scores,
                and achievements, are stored immutably on a blockchain ledger.
                This ensures data security, transparency, and tamper-proof
                records.
              </p>
            </li>
            <li>
              <h3>Checkpoints and Attendance:</h3>
              <p>
                The system incorporates checkpoints at strategic points within
                the learning path. Students must successfully complete
                checkpoints to progress further, ensuring mastery of key
                concepts. Attendance is recorded using a secure verification
                method (e.g., facial recognition, unique access codes).
              </p>
            </li>
            <li>
              <h3>Performance Calculation and Rewards:</h3>
              <p>
                An AI-powered engine calculates student performance based on
                various factors:
                <ul>
                  <li>Completion of modules and checkpoints</li>
                  <li>Scores on quizzes and assessments</li>
                  <li>Time spent on learning activities</li>
                </ul>
                Based on performance, students earn rewards and badges stored on
                the blockchain wallet. These rewards can be:
              </p>
              <ul>
                <li>
                  Virtual badges and points redeemable for in-platform
                  privileges.
                </li>
                <li>
                  Real-world benefits (optional) like redeemable points for
                  discounts or educational resources.
                </li>
              </ul>
            </li>
          </ul>

          <h2>Key Technologies:</h2>

          <ul>
            <li>Solidity</li>
            <li>NextJS</li>
          </ul>

          <h2>Additional tools:</h2>

          <ul>
            <li>Ethers</li>
            <li>Rainbow Kit</li>
            <li>Wagmi</li>
          </ul>

          <h2>Benefits:</h2>

          <ul>
            <li>
              Personalized Learning: Cater to individual student needs and
              learning styles.
            </li>
            <li>
              Improved Engagement: Gamification elements and interactive modules
              boost motivation.
            </li>
            <li>
              Secure and Transparent Data: Blockchain ensures tamper-proof
              records and data security.
            </li>
            <li>
              Measurable Progress: Track performance with clear checkpoints and
              progress reports.
            </li>
            <li>
              Reward-Driven Learning: Motivate students with a rewarding system
              that recognizes achievements.
            </li>
          </ul>

          <h2>Next Steps:</h2>

          <ul>
            <li>
              Develop a user-friendly interface for students, educators, and
              administrators.
            </li>
            <li>
              Integrate AI algorithms for personalized learning path generation.
            </li>
            <li>
              Pilot test the MVP with a small group of students and educators.
            </li>
            <li>
              Gather feedback and iterate based on user experience to improve
              the platform.
            </li>
          </ul>

          <p>
            Cuberhack{"'"}s personalized learning system has the potential to
            revolutionize education by creating a dynamic, secure, and rewarding
            learning environment for all.
          </p>
          <article>
            <h1>
              Cuberhack: Personalized Learning with Blockchain and AI (MVP)
            </h1>
            <p>
              Cuberhack is building a revolutionary personalized learning system
              build on Klaytn that leverages the power of blockchain and AI to
              create an engaging and rewarding educational experience. Our
              Minimum Viable Product (MVP) focuses on core functionalities to
              validate the concept and gather user feedback for future
              iterations.
            </p>
            <h2>Key Features:</h2>
            <ul>
              <li>
                <strong>Personalized Learning Paths:</strong>
                <ul>
                  <li>
                    AI analyzes student performance data (stored securely on the
                    blockchain) to identify strengths, weaknesses, and learning
                    styles.
                  </li>
                  <li>
                    Based on this analysis, the system recommends personalized
                    learning paths with curated content (text, videos, quizzes)
                    tailored to individual needs.
                  </li>
                </ul>
              </li>
              <li>
                <strong>Interactive Learning Modules:</strong>
                <ul>
                  <li>
                    The platform offers interactive learning modules that
                    leverage gamification elements to boost engagement.
                  </li>
                  <li>
                    Modules may include quizzes, interactive exercises, and
                    simulations that provide immediate feedback and track
                    progress.
                  </li>
                </ul>
              </li>
              <li>
                <strong>Secure Blockchain Ledger:</strong>
                <ul>
                  <li>
                    Student performance data, including completed modules,
                    scores, and achievements, are stored immutably on a
                    blockchain ledger.
                  </li>
                  <li>
                    This ensures data security, transparency, and tamper-proof
                    records.
                  </li>
                </ul>
              </li>
              <li>
                <strong>Checkpoints and Attendance:</strong>
                <ul>
                  <li>
                    The system incorporates checkpoints at strategic points
                    within the learning path.
                  </li>
                  <li>
                    Students must successfully complete checkpoints to progress
                    further, ensuring mastery of key concepts.
                  </li>
                  <li>
                    Attendance is recorded using a secure verification method
                    (e.g., facial recognition, unique access codes).
                  </li>
                </ul>
              </li>
              <li>
                <strong>Performance Calculation and Rewards:</strong>
                <ul>
                  <li>
                    An AI-powered engine calculates student performance based on
                    various factors:
                  </li>
                  <li>
                    Based on performance, students earn rewards and badges
                    stored on the blockchain wallet.
                  </li>
                </ul>
              </li>
            </ul>
            <h2>Key Technologies:</h2>
            <ul>
              <li>Solidity</li>
              <li>NextJS</li>
            </ul>
            <h2>Additional tools:</h2>
            <ul>
              <li>Ethers</li>
              <li>Rainbow Kit</li>
              <li>Wagmi</li>
            </ul>
            <h2>Benefits:</h2>
            <ul>
              <li>
                Personalized Learning: Cater to individual student needs and
                learning styles.
              </li>
              <li>
                Improved Engagement: Gamification elements and interactive
                modules boost motivation.
              </li>
              <li>
                Secure and Transparent Data: Blockchain ensures tamper-proof
                records and data security.
              </li>
              <li>
                Measurable Progress: Track performance with clear checkpoints
                and progress reports.
              </li>
              <li>
                Reward-Driven Learning: Motivate students with a rewarding
                system that recognizes achievements.
              </li>
            </ul>
            <h2>Next Steps:</h2>
            <ol>
              <li>
                Develop a user-friendly interface for students, educators, and
                administrators.
              </li>
              <li>
                Integrate AI algorithms for personalized learning path
                generation.
              </li>
              <li>
                Pilot test the MVP with a small group of students and educators.
              </li>
              <li>
                Gather feedback and iterate based on user experience to improve
                the platform.
              </li>
            </ol>
            <p>
              Cuberhack{"'"}s personalized learning system has the potential to
              revolutionize education by creating a dynamic, secure, and
              rewarding learning environment for all.
            </p>
          </article>
        </div>
      </section>
      <footer className="flex flex-col gap-2 sm:flex-row py-2 w-full shrink-0 items-center px-4 md:px-6 border-t">
        <nav className="flex flex-col gap-2 md:flex-row md:ml-auto md:gap-4 lg:gap-6">
          <Link className="text-xs hover:underline underline-offset-4" href="#">
            Terms of Service
          </Link>
          <Link className="text-xs hover:underline underline-offset-4" href="#">
            Privacy
          </Link>
        </nav>
      </footer>
    </div>
  );
}
