import clsx from 'clsx';
import Heading from '@theme/Heading';
import styles from './styles.module.css';

const FeatureList = [
  {
    title: 'Innovative solutions',
    Svg: require('@site/static/img/inovatine-solutions-2.svg').default,
    description: (
      <>
        Heliotics specializes in IoT solutions that use LoRaWAN and NB-IoT technologies. These low power, long range
          communication protocols enable efficient data collection and management applications like smart cities,
          agriculture, industrial automatization. From energy monitoring to waste management, Heliotics provides solutions
          for multiple industries.
      </>
    ),
  },
  {
    title: 'Smart Sensors and Custom Platforms',
    Svg: require('@site/static/img/smart-and-custom-platforms-2.svg').default,
    description: (
      <>
        We offer a wide range of pre tested IoT sensors and software platform. Customers can monitor their processes,
          receive alerts and analyze data through user-friendly dashboard. The Heliotics Core platform integrates all IoT
          devices, allowing data management and visualization for efective decision making.
      </>
    ),
  },
  {
    title: 'Sustainability and Efficiency',
    Svg: require('@site/static/img/sustainibility and efficiency 2.svg').default,
    description: (
      <>
        Our solutions are designes to optimize resource usage and reduce cost. By providing real-time data and predictive
          analytics, customer can prevent losses and increase productivity.
      </>
    ),
  },
];

function Feature({Svg, title, description}) {
  return (
    <div className={clsx('col col--4')}>
      <div className="text--center">
        <Svg className={styles.featureSvg} role="img" />
      </div>
      <div className="text--center padding-horiz--md">
        <Heading as="h3">{title}</Heading>
        <p>{description}</p>
      </div>
    </div>
  );
}

export default function HomepageFeatures() {
  return (
    <section className={styles.features}>
      <div className="container">
        <div className="row">
          {FeatureList.map((props, idx) => (
            <Feature key={idx} {...props} />
          ))}
        </div>
      </div>
    </section>
  );
}
