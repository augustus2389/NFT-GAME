import React from "react";
import styled from "styled-components";

const Container = styled.div`
  max-width: 1024px;
  margin: auto;
`;
const Text = styled.p`
  color: black;
`;
const Span = styled.span`
  font-weight: 700;
`;
const DivSpan = styled.div`
  margin-top: 30px;
`;
function FAQ() {
  return (
    <section id="FAQ">
      <div className="container">
        <Container>
          <h2 className="text-center pt-5">FREQUENTLY ASKED QUESTIONS</h2>
          <Text>
            <i>Last Update: August 18, 2021</i>
          </Text>
          <DivSpan>
            <Span>Which platforms does the Augustus Games Store support?</Span>
            <Text>
              The Augustus Games Store currently offers PC and Mac support. You
              can check platform compatibility for individual titles by
              referring to the “About Game” section of any product page.
            </Text>
          </DivSpan>
          <DivSpan>
            <Span>What are the future plans for the Augustus Games Store?</Span>
            <Text>
              You can find upcoming features, developer updates, and major known
              issues on our Augustus Games Store Roadmap on Trello. We’ll also
              share significant updates with you on our news feed and social
              media pages such as Facebook, Twitter, Instagram, and YouTube.
            </Text>
          </DivSpan>
          <DivSpan>
            <Span>
              Why does the Augustus Games Store make exclusivity deals?
            </Span>
            <Text>
              Exclusives are a part of the growth of many successful platforms
              for games and for other forms of digital entertainment, such as
              streaming video and music. Augustus works in partnership with
              developers and publishers to offer games exclusively on the store.
              In exchange for exclusivity, Augustus provides them with financial
              support for development and marketing, which enables them to build
              more polished games with significantly less uncertainty for the
              creators. In addition, creators will earn 88% of all the revenue
              from their game, while most stores only offer 70%.
            </Text>
          </DivSpan>
          <DivSpan>
            <Span>What is the Support-A-Creator program? </Span>
            <Text>
              The Support-A-Creator program enables content Creators to earn
              money from games in the Augustus Games Store by using Creator
              Links and Creator Tags. Learn more about the Support-A-Creator
              program here.
            </Text>
          </DivSpan>
          <DivSpan>
            <Span>What’s this about free games?</Span>
            <Text>
              Augustus will be offering a new free game available each week
              throughout 2022. When you claim a free game, it’s yours to keep -
              even after the game is no longer available to new customers for
              free.
            </Text>
          </DivSpan>
          <DivSpan>
            <Span>
              I claimed a free game but don’t see it on my account now, why?
            </Span>
            <Text>
              Once you claim a free game, it’s yours to keep. If you come back
              later and don’t see it your account, please check to see if you
              have multiple accounts. If you created an Augustus account using
              an @gmail.com email address, log in to it directly using your
              Gmail password; using the Google login button will create a
              distinct account even if it’s tied to the same @gmail.com email
              address. And check to see if you have both a console-linked
              account (logging in via PlayStation, Xbox, or Nintendo account)
              and a separate Augustus account. If you still encounter issues,
              please contact player support here.
            </Text>
          </DivSpan>
          <DivSpan>
            <Span>Can I try a game before I buy it?</Span>
            <Text>
              Some publishers occasionally offer demos or free trial periods for
              certain non-free games from time to time (for example, a Free
              Weekend trial). During a free trial period, you can download and
              play a trial version of the game before you decide to purchase,
              but you can no longer access the game when the trial period ends.
            </Text>
          </DivSpan>
          <DivSpan>
            <Span>How do refunds work on the Augustus Games Store?</Span>
            <Text>
              All games are eligible for refund within 14 days of purchase for
              any reason, as long as you’ve had the game running for less than 2
              hours. You will not be eligible for refunds for games from which
              you have been banned or for which you have otherwise violated the
              Terms of Service. Learn more about our refund policy here.
            </Text>
          </DivSpan>
          <DivSpan>
            <Span>How do I contact support?</Span>
            <Text>
              You can contact our support team here. We also recommend browsing
              our support center articles, which may help answer questions or
              resolve issues.
            </Text>
          </DivSpan>
          <DivSpan>
            <Span>Is my Augustus Games account secure?</Span>
            <Text>
              The Augustus account system powers Fortnite, Rocket League, the
              Augustus Games Store, and Unreal Engine. This account system has
              never been compromised. However, specific individual Augustus
              accounts have been compromised by hackers using lists of email
              addresses and passwords leaked from other sites which have been
              compromised. If you use the same email address and password on
              Augustus as you used on another site which has been compromised,
              then your account is vulnerable to attack. To secure your Augustus
              account, use a unique password, and enable multi-factor
              authentication. You can learn more about the measures we take to
              protect your account and what you can do to stay safe here.
            </Text>
          </DivSpan>
          <DivSpan>
            <Span>What languages does the Augustus Games Store support?</Span>
            <Text>
              The Augustus Games Store currently supports English, Arabic,
              German, Spanish (Spain), Spanish (Latin America), French, Italian,
              Japanese, Korean, Polish, Portuguese, Russian, Thai, Turkish,
              Simplified Chinese, and Traditional Chinese. In-game language
              support varies per game, as provided by the developer; check each
              game’s store page for language availability.
            </Text>
          </DivSpan>
          <DivSpan>
            <Span>Does the Augustus Games Store support regional pricing?</Span>
            <Text>
              Yes, we do support regional pricing in more than 190 countries and
              over 30 territories. We also have a set of suggested regional
              discounts for developers based on local norms that are regularly
              reviewed.
            </Text>
          </DivSpan>
          <DivSpan>
            <Span>Which payment methods are supported?</Span>
            <Text>
              The Augustus Games Store supports credit cards, PayPal, and a
              variety of alternative payment methods. This is a list of the
              alternative payment methods we currently support. Methods carrying
              additional payment processing fees are marked with an *asterisk.
            </Text>
          </DivSpan>
          <DivSpan style={{ paddingBottom: "20px" }}>
            <Span>Where is the Augustus Games store available?</Span>
            <Text>
              The Augustus Games Store is available to players in most countries
              in the world except where prohibited by US law, such as North
              Korea and Iran. Certain regions may have additional legal
              requirements that you may need to implement in your game in order
              to be compliant and to be distributed there.
            </Text>
          </DivSpan>
        </Container>
      </div>
    </section>
  );
}

export default FAQ;
