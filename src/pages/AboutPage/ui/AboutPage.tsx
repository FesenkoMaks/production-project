import { useTranslation } from 'react-i18next'

const AboutPage = () => {
    const { t } = useTranslation('about')
    return (
        <div>
            {t('ABOUT_PAGE')}
        </div>
    )
}

export default AboutPage
