/* eslint-disable react/jsx-one-expression-per-line */
import React from 'react';

import Layout from '../components/layout';
import FullWidthSection from '../components/FullWidthSection';
import ProjectsSlider from '../components/ProjectsSlider';
import LogoGrid from '../components/LogoGrid';
import { colors } from '../styles';
import SplitSection from '../components/SplitSection';
import InsightsSlider from '../components/InsightsSlider';
import Quote from '../components/ContentBody/Quote';
import { partnersProjects, partnersSub } from '../styles/custom-css';

// eslint-disable-next-line react/prop-types
export default ({ pageContext }) => {
  const { allInsight } = pageContext.insightSlider.data;
  const { allCaseStudy } = pageContext.projectSlider.data;

  return (
    <Layout
      headerData={{
        invert: true,
        label: 'End-to-End Agency — Deep Commerce Experience — Growth Focused',
        title: 'Get Shopify Plus without the limits.',
        color: colors.shopifyGreen,
        mobileMinHeight: '620px',
        width: '480px',
        titlePadding: '0 100px',
      }}
    >
      <FullWidthSection height='400px' align='left' css={partnersSub}>
        <h4>Scalable, commerce-first experiences</h4>
        <p>
          Commerce is increasingly less about selling and more about inspiring
          customers. We take the throttle off Shopify Plus to build experiences
          that you didn’t think were possible.
        </p>
        <div>
          <ul>
            <li>Bespoke Shopify store</li>
            <li>Migration</li>
            <li>Ongoing support &amp; optimization</li>
          </ul>
          <ul>
            <li>Custom apps &amp; integrations</li>
            <li>CRO</li>
            <li>Custom subscriptions/checkout</li>
          </ul>
        </div>
      </FullWidthSection>
      <ProjectsSlider data={allCaseStudy} backgroundColor={colors.lightgray} />
      <LogoGrid
        logoset='shopify'
        title='Some of Our Shopify Clients'
        backgroundColor={colors.white}
        minHeight='0'
      />
      <SplitSection gridColumnGap='16px' css={partnersProjects}>
        <article>
          <h2>Conquer complexity</h2>
          <p>
            Shopify is not complex, but your integration may be. We’ve pioneered
            robust integrations for both back and front-end experiences.
          </p>
        </article>
        <article>
          <h2>Maximize your budget</h2>
          <p>
            Minimize your build investment and reinvest into initiatives that
            move the needle. (We can help with that too).
          </p>
        </article>
        <article>
          <h2>Global first</h2>
          <p>
            Companies need to think globally to compete. We’ll help you lay the
            foundation from day one.
          </p>
        </article>
        <article>
          <h2>Automate with flow</h2>
          <p>
            Automation is about more than just saving time. We leverage Shopify
            Flow to create automated processes that create raving fans and big
            spenders.
          </p>
        </article>
      </SplitSection>
      <Quote
        size='small'
        data={{
          field_quote: `Working with Third and Grove has been nothing short of phenomenal. They've successfully built solutions and delivered experiences that help merchants win.`,
          field_footer_text: 'Rob Barr, Agency Partnerships, ReCharge Payments',
        }}
      />
      <InsightsSlider
        data={allInsight}
        showButton={false}
        backgroundColor={colors.lightgray}
      />
    </Layout>
  );
};