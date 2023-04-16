import React, { useEffect, useState } from 'react'
import { useTranslation } from 'react-i18next';
import ReactGA from 'react-ga4';

const LangSwitcher = () => {
    const { i18n } = useTranslation();
    const [showList, setShowList] = useState(false);
    const [langs, setLangs] = useState(
        JSON.parse(localStorage.getItem('moussa_saidi_portfolio_langs')) ?
            JSON.parse(localStorage.getItem('moussa_saidi_portfolio_langs')) :
            [
                {
                    id: 'en',
                    label: 'English',
                    current: true
                },
                {
                    id: 'fr',
                    label: 'Français',
                    current: false
                }
            ]);

    useEffect(() => {
        const currenLang = langs.filter(l => l.current);
        i18n.changeLanguage(currenLang[0].id)
    }, [])

    useEffect(() => {
        localStorage.setItem('moussa_saidi_portfolio_langs', JSON.stringify(langs));
    }, [langs]);

    const toggleList = () => setShowList(prev => !prev);

    const changeLang = (lang) => {
        if (!lang.current) {
            console.log('change lang')
            i18n.changeLanguage(lang.id);
            toggleList();
            if (lang.id === 'fr') {
                setLangs([
                    {
                        id: 'en',
                        label: 'English',
                        current: false
                    },
                    {
                        id: 'fr',
                        label: 'Français',
                        current: true
                    }
                ]);
                ReactGA.event({
                    category: "language",
                    action: "change",
                    label: "french"
                });
            } else {
                setLangs([
                    {
                        id: 'en',
                        label: 'English',
                        current: true
                    },
                    {
                        id: 'fr',
                        label: 'Français',
                        current: false
                    }
                ]);
                ReactGA.event({
                    category: "language",
                    action: "change",
                    label: "english"
                });
            }
        }
    }

    return (
        <div className='lang-switcher'>
            <button
                className='lang-switcher__current'
                onClick={toggleList}
                aria-label='change language'
            >
                {
                    langs.map(lang => lang.current ? lang.label : '')
                }
            </button>
            <div className={showList ? 'lang-switcher__list open' : 'lang-switcher__list'}>
                {
                    langs.map(lang => (
                        <button
                            className='lang-switcher__list-item'
                            disabled={lang.current}
                            onClick={() => changeLang(lang)}
                            aria-label={lang.label}
                            key={lang.id}
                        >
                            {lang.label}
                        </button>
                    ))
                }
            </div>
        </div>
    )
}

export default LangSwitcher