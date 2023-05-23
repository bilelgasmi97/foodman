import React, { useRef, useState } from "react";
import cls from "./welcomeHero.module.scss";
import useLocale from "hooks/useLocale";
import Search2LineIcon from "remixicon-react/Search2LineIcon";
import PrimaryButton from "components/button/primaryButton";
import { useSettings } from "contexts/settings/settings.context";
import dynamic from "next/dynamic";
import { useRouter } from "next/router";
import MapPinRangeLineIcon from "remixicon-react/MapPinRangeLineIcon";
import { DEFAULT_LOCATION } from "constants/config";
import { getAddressFromLocation } from "utils/getAddressFromLocation";

const Map = dynamic(() => import("components/map/map"), { ssr: false });

type Props = {};

export default function WelcomeHero({}: Props) {
  const { t } = useLocale();
  const inputRef = useRef<any>();
  const { push } = useRouter();
  const { updateAddress, updateLocation } = useSettings();
  const [location, setLocation] = useState({ lat: 0, lng: 0 });

  const onSubmit = (event?: any) => {
    event.preventDefault();
    if (!location.lat && !location.lng) {
      return;
    }
    updateAddress(inputRef.current?.value);
    updateLocation(`${location.lat},${location.lng}`);
    push("/");
  };

  const chooseDefaultAddress = async () => {
    const latlng = DEFAULT_LOCATION?.split(",") || [];
    setLocation({ lat: Number(latlng[0] || 0), lng: Number(latlng[1] || 0) });
    const address = await getAddressFromLocation(DEFAULT_LOCATION);
    inputRef.current.value = address;
  };

  return (
    <>
      <div className={cls.container}>
        <div className="welcome-container">
          <div className={cls.wrapper}>
            <div className={cls.block}>
              <h1 className={cls.title}>{t("welcome.title")}</h1>
              <p className={cls.caption}>{t("welcome.description")}</p>
              <div className={cls.searchBar}>
                <form className={cls.search} onSubmit={onSubmit}>
                  <label htmlFor="search">
                    <Search2LineIcon />
                  </label>
                  <input
                    type="text"
                    id="search"
                    name="search"
                    ref={inputRef}
                    placeholder={t("search")}
                    autoComplete="off"
                  />
                </form>
                <div className={cls.btnWrapper}>
                  <PrimaryButton onClick={onSubmit}>{t("ok")}</PrimaryButton>
                </div>
              </div>
              <div className={cls.actions}>
                <button
                  type="button"
                  className={cls.textButton}
                  onClick={chooseDefaultAddress}
                >
                  <MapPinRangeLineIcon />
                  <span className={cls.text}>
                    {t("choose.recomended.address")}
                  </span>
                </button>
              </div>
              <div className={cls.stats}>
                <div className={cls.item}>
                  <span className={cls.number}>3500+</span>
                  <span className={cls.text}>{t("people.trust.us")}</span>
                </div>
                <div className={cls.item}>
                  <span className={cls.number}>25K+</span>
                  <span className={cls.text}>
                    {t("delivery.was.successfull")}
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Map location={location} setLocation={setLocation} inputRef={inputRef} />
    </>
  );
}
