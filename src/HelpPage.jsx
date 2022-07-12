import { Container } from 'react-bootstrap';

function HelpPage() {
    return (
        <div>
            <Container>
                <div className="d-flex justify-content-center mt-5">
                    <div style={{ width: '80%' }}>
                        <h4>ขั้นตอนการซื้อของกับ Shark Shop</h4>
                        <ol>
                            <li>เข้าสู่ระบบเว็บไซต์ Shark Shop</li>
                            <li>เลือกเกมที่ต้องการเติมเงิน ex. Roblox, Grand Theft Auto 5, etc.</li>
                            <li>เลือกจำนวนเงินที่ต้องการเติม</li>
                            <li>ระบบจะส่งข้อมูลไปยับเพจ Facebook เพื่อทำรายการต่อไป</li>
                        </ol>
                    </div>
                </div>

            </Container>
        </div>
    );
}

export default HelpPage