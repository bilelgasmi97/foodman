import React from "react";
import SEO from "components/seo";
import WelcomeContainer from "containers/welcome/welcome";
import WelcomeHero from "components/welcomeHero/welcomeHero";
import WhyChooseUs from "components/whyChooseUs/whyChooseUs";
import { useQuery } from "react-query";
import useLocale from "hooks/useLocale";
import blogService from "services/blog";
import WelcomeBlog from "components/welcomeBlog/welcomeBlog";
import FaqContainer from "containers/faq/faq";
import faqService from "services/faq";

type Props = {};

export default function Welcome({}: Props) {
  const { locale } = useLocale();

  const { data } = useQuery(["lastBlog", locale], () =>
    blogService.getLastBlog()
  );

  const { data: faqs } = useQuery(["faqs", locale], () => faqService.getAll());

  return (
    <>
      <SEO />
      <WelcomeContainer>
        <WelcomeHero />
        <WhyChooseUs />
        <WelcomeBlog data={data?.data} />
        <FaqContainer data={faqs?.data} />
      </WelcomeContainer>
    </>
  );
}
