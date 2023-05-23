import React from "react";
import cls from "./whyChooseUs.module.scss";
import useLocale from "hooks/useLocale";

type Props = {};

export default function WhyChooseUs({}: Props) {
  const { t } = useLocale();

  return (
    <div className={cls.container}>
      <div className="welcome-container">
        <section className={cls.wrapper}>
          <h1 className={cls.title}>{t("why.choose.us")}</h1>
          <div className={cls.flex}>
            <div className={cls.card} tabIndex={1}>
              <div className={cls.number}>01</div>
              <h3 className={cls.cardTitle}>
                {t("why.choose.us.first.title")}
              </h3>
              <p className={cls.text}>{t("why.choose.us.first.text")}</p>
              <video loop muted autoPlay>
                <source src="/media/feature-1.mp4" />
              </video>
            </div>
            <div className={cls.card} tabIndex={2}>
              <div className={cls.number}>02</div>
              <h3 className={cls.cardTitle}>
                {t("why.choose.us.second.title")}
              </h3>
              <p className={cls.text}>{t("why.choose.us.second.text")}</p>
              <video loop muted autoPlay>
                <source src="/media/feature-2.mp4" />
              </video>
            </div>
            <div className={cls.card} tabIndex={3}>
              <div className={cls.number}>03</div>
              <h3 className={cls.cardTitle}>
                {t("why.choose.us.third.title")}
              </h3>
              <p className={cls.text}>{t("why.choose.us.third.text")}</p>
              <video loop muted autoPlay>
                <source src="/media/feature-3.mp4" />
              </video>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}
