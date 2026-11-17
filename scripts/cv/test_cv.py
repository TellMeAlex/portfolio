import hashlib
import subprocess
import tempfile
import unittest
from pathlib import Path

ROOT = Path(__file__).resolve().parents[2]
GENERATOR = ROOT / 'scripts/cv/generate.py'


class CvTest(unittest.TestCase):
    def test_bilingual_pdf_is_reproducible_and_extractable(self):
        with tempfile.TemporaryDirectory() as tmp:
            first = Path(tmp) / 'one.pdf'
            second = Path(tmp) / 'two.pdf'
            for output in (first, second):
                subprocess.run(['python3', str(GENERATOR), str(output)], check=True)
            self.assertEqual(hashlib.sha256(first.read_bytes()).digest(), hashlib.sha256(second.read_bytes()).digest())
            info = subprocess.check_output(['pdfinfo', str(first)], text=True)
            self.assertRegex(info, r'Pages:\s+2\b')
            for page, words in ((1, ['Experiencia', 'Formación', 'Jaén']),
                                (2, ['Experience', 'Education', 'Jaén'])):
                text = subprocess.check_output(['pdftotext', '-f', str(page), '-l', str(page), str(first), '-'], text=True)
                for word in words + ['Alejandro de la Fuente de la Rosa', 'NTT DATA', 'RTVE Play', 'Hello Auto', 'llamamealex@gmail.com']:
                    self.assertIn(word.casefold(), text.casefold())
                self.assertNotIn('+34 629', text)


if __name__ == '__main__':
    unittest.main()
