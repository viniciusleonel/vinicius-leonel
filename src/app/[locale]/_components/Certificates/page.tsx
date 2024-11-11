import {
    CertificatesMain,
    CertificatesTitle,
    CertificatesContent,
    CertificatesContentItem,
    CertificatesContentItemLink,
} from "./__components/certificates";
import certificatesList from "./__components/certificates-list";

export default function Certificates() {
    return (
        <CertificatesMain>
            <CertificatesTitle>Certificados</CertificatesTitle>
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
