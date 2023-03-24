import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';

i18n
    .use(initReactI18next)
    .init({
        debug: true,
        fallbackLng: 'en',
        interpolation: {
            escapeValue: false,
        },
        resources: {
            en: {
                translation: {
                    "landing": {
                        "greeting": "hello",
                        "Iam": "I'm",
                        "developer": "web developer",
                        "designer": "UI/UX designer",
                        "experience": {
                            "years": "years",
                            "year": "year",
                            "design": "Design experience",
                            "dev": "Web development  experience"
                        }
                    },
                    "services": {
                        "title": "Services",
                        "webdev": "Web development",
                        "webmaintenance": "Web maintenance",
                        "emailsdev": "Emails development"
                    },
                    "projects": {
                        "title": "Projects",
                        "body": "This is a selection of projects that showcase my skills and experience in UI/UX design and WEB development.",
                        "seeall": "see all projects",
                        "popup": {
                            "techs": "Technologies used",
                            "findon": "Find on"
                        }
                    },
                    "contact": {
                        "title": "Let's work",
                        "body": "I would love to hear from you!",
                        "form":{
                            "title": "Contact form",
                            "errTitle": "Form invalid",
                            "success": "Message send!",
                            "failed": "Sending failed, please try again later",
                            "name": "Name",
                            "send": "Send message",
                            "validation": {
                                "name": "enter a valid name",
                                "email": "enter a valid email",
                                "message": "min. 20 character"
                            }
                        }
                    },
                    "footer": {
                        "findme": "FIND ME",
                        "in": "IN"
                    }
                }
            },
            fr: {
                translation: {
                    "landing": {
                        "greeting": "salut",
                        "Iam": "Je suis",
                        "developer": "web développeur",
                        "designer": "UI/UX designer",
                        "experience": {
                            "years": "ans",
                            "year": "année",
                            "design": "Expérience de design",
                            "dev": "Expérience en développement Web"
                        }
                    },
                    "services": {
                        "title": "Les services",
                        "webdev": "Développement web",
                        "webmaintenance": "Maintenance Web",
                        "emailsdev": "Dév des e-mails"
                    },
                    "projects": {
                        "title": "Les projets",
                        "body": "Voici une sélection de projets qui mettent en valeur mes compétences et mon expérience en UI/UX design et en développement WEB.",
                        "seeall": "voir tous les projets",
                        "popup": {
                            "techs": "Technologies utilisées",
                            "findon": "Trouver sur"
                        }
                    },
                    "contact": {
                        "title": "Allons travailler",
                        "body": "J'aimerais lire votre message!",
                        "form":{
                            "title": "Formulaire de contact",
                            "errTitle": "Formulaire invalide",
                            "success": "Message envoyé!",
                            "failed": "Échec de l'envoi, veuillez réessayer plus tard",
                            "name": "Nom",
                            "send": "Envoyer le message",
                            "validation": {
                                "name": "entrer un nom valide",
                                "email": "entrer un email valide",
                                "message": "min. 20 caractères"
                            }
                        }
                    },
                    "footer": {
                        "findme": "TROUVEZ-MOI",
                        "in": "DANS"
                    }
                }

            }
        }
    });

export default i18n;