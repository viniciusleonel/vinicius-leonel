import {
    CertificatesMain,
    CertificatesTitle,
    CertificatesContent,
    CertificatesContentItem,
    CertificatesContentItemLink,
} from "./__components/certificates";
import certificatesList from "./__components/certificates-list";
import {useTranslations} from 'next-intl';

export default function Certificates() {

    const t = useTranslations('NavBar');

    return (
        <CertificatesMain>
            <CertificatesTitle>{t('certificates')}</CertificatesTitle>
            <CertificatesContent>
                {certificatesList.map((certificate, index) => (
                    <CertificatesContentItem key={index}>
                        <CertificatesContentItemLink
                            link={certificate.link}
                            title={certificate.title}
                            school={certificate.school}                        />
                    </CertificatesContentItem>
                ))}
            </CertificatesContent>
        </CertificatesMain>
    );
}
