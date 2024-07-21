import {
    CertificatesMain,
    CertificatesTitle,
    CertificatesContent,
    CertificatesContentItem,
    CertificatesContentItemLink,
    CertificatesContentItemSchool,
    CertificatesContentItemTitle,
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
                            onClick={() =>
                                window.open(certificate.link, "_blank")
                            }
                        >
                            <CertificatesContentItemTitle>
                                {certificate.title}
                            </CertificatesContentItemTitle>
                            <CertificatesContentItemSchool>
                                {certificate.school}
                            </CertificatesContentItemSchool>
                        </CertificatesContentItemLink>
                    </CertificatesContentItem>
                ))}
            </CertificatesContent>
        </CertificatesMain>
    );
}
