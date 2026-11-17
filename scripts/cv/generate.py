#!/usr/bin/env python3
"""Generate the two-page ES/EN CV using Python's standard library only.

The text is curated from src/content/portfolio.ts and server/facts.mjs.
PDF base fonts use WinAnsi encoding; the document is deterministic byte-for-byte.
"""
import sys
from pathlib import Path

ROOT = Path(__file__).resolve().parents[2]

PAGES = [
    {
        'language': 'ES',
        'profile': [
            'Expert Architect y AI Champion en NTT DATA. Como AI/SDD Delivery Lead,',
            'lidera la adopción de IA aplicada al desarrollo en equipos de más de 800 profesionales.',
        ],
        'experience_title': 'Experiencia',
        'jobs': [
            ('2026 – Actualidad', 'Expert Architect · AI Champion · NTT DATA',
             'AI/SDD Delivery Lead; adopción de IA en equipos de más de 800 profesionales.'),
            ('2025', 'Technical Leader Specialist · NTT DATA',
             'AI Champion para NTT DATA e Inditex; formación en agentes, MCP y SDD.'),
            ('2023 – 2025', 'Desarrollador sénior · NTT DATA · Inditex',
             'SPA y microfrontends: primera plataforma de RRHH del grupo publicada mundialmente.'),
            ('2022 – 2023', 'Desarrollador web · RTVE Play',
             'APIs de contenidos, reproductor de vídeo y QA automatizada con Puppeteer.'),
            ('2021 – 2022', 'Desarrollador web · Hello Auto',
             'Telemetría IoT en tiempo real con React y Node/Azure; mentoría a 3 desarrolladores junior.'),
        ],
        'education_title': 'Formación',
        'education': 'Grado Superior en Desarrollo de Aplicaciones Web · Las Fuentezuelas · 2017 – 2019',
        'projects_title': 'Proyectos y divulgación',
        'projects': [
            'Código Sin Siesta: charlas y talleres sobre agentes, MCP, SDD, LLM Wiki y Graphify.',
            '@codigosinsiesta/theme: sistema de diseño para presentaciones con Svelte 5.',
            'tecnoboletin: boletines de Telegram legibles, con Astro 5.',
        ],
        'stack_title': 'Tecnologías',
    },
    {
        'language': 'EN',
        'profile': [
            'Expert Architect and AI Champion at NTT DATA. As AI/SDD Delivery Lead,',
            'leads AI adoption in software development across teams of 800+ professionals.',
        ],
        'experience_title': 'Experience',
        'jobs': [
            ('2026 – Present', 'Expert Architect · AI Champion · NTT DATA',
             'AI/SDD Delivery Lead; AI adoption across teams of 800+ professionals.'),
            ('2025', 'Technical Leader Specialist · NTT DATA',
             'AI Champion for NTT DATA and Inditex; training on agents, MCP and SDD.'),
            ('2023 – 2025', 'Senior Developer · NTT DATA · Inditex',
             "SPA and microfrontends: the group's first HR platform published worldwide."),
            ('2022 – 2023', 'Web Developer · RTVE Play',
             'Content APIs, video player and QA automation with Puppeteer.'),
            ('2021 – 2022', 'Web Developer · Hello Auto',
             'Real-time IoT telemetry with React and Node/Azure; mentored 3 junior developers.'),
        ],
        'education_title': 'Education',
        'education': 'Higher vocational qualification in Web Application Development · Las Fuentezuelas · 2017 – 2019',
        'projects_title': 'Projects and talks',
        'projects': [
            'Código Sin Siesta: talks and workshops on agents, MCP, SDD, LLM Wiki and Graphify.',
            '@codigosinsiesta/theme: presentation design system using Svelte 5.',
            'tecnoboletin: readable Telegram digests, built with Astro 5.',
        ],
        'stack_title': 'Technology',
    },
]


def pdf_string(value):
    return value.encode('cp1252').replace(b'\\', b'\\\\').replace(b'(', b'\\(').replace(b')', b'\\)')


def make_page(page):
    commands = []

    def text(x, y, value, size=10, bold=False, color='0.13 0.17 0.22'):
        commands.append((f'BT /{"F2" if bold else "F1"} {size} Tf {color} rg 1 0 0 1 {x} {y} Tm ('.encode('ascii')
                         + pdf_string(value) + b') Tj ET\n'))

    def section(y, title):
        text(46, y, title.upper(), 9, True, '0.02 0.35 0.42')
        commands.append(f'0.78 0.85 0.85 RG 0.6 w 46 {y-6} m 549 {y-6} l S\n'.encode('ascii'))

    text(46, 794, 'Alejandro de la Fuente de la Rosa', 21, True)
    text(46, 774, 'Expert Architect · AI Champion · NTT DATA · Jaén', 10, True, '0.02 0.35 0.42')
    text(46, 757, 'llamamealex@gmail.com  ·  tellmealex.dev  ·  github.com/TellMeAlex', 9)
    text(46, 743, 'linkedin.com/in/alejandro-de-la-fuente', 9)
    for i, line in enumerate(page['profile']):
        text(46, 716 - i * 14, line, 10)
    section(677, page['experience_title'])
    for i, (date, title, detail) in enumerate(page['jobs']):
        y = 658 - i * 57
        text(46, y, date, 9, True, '0.33 0.38 0.41')
        text(145, y, title, 10, True)
        text(145, y - 15, detail, 9)
    section(371, page['education_title'])
    text(46, 352, page['education'], 9)
    section(322, page['projects_title'])
    for i, line in enumerate(page['projects']):
        text(46, 303 - i * 17, line, 9)
    section(235, page['stack_title'])
    text(46, 216, 'React · TypeScript · Microfrontends · Astro · Svelte 5 · Node · Claude Code', 9)
    text(46, 200, 'MCP · GSAP · Tailwind', 9)
    text(46, 43, 'tellmealex.dev', 8, False, '0.4 0.45 0.48')
    text(514, 43, page['language'], 8, True, '0.4 0.45 0.48')
    return b''.join(commands)


def generate():
    streams = [make_page(page) for page in PAGES]
    objects = [
        b'<< /Type /Catalog /Pages 2 0 R >>',
        b'<< /Type /Pages /Kids [5 0 R 7 0 R] /Count 2 >>',
        b'<< /Type /Font /Subtype /Type1 /BaseFont /Helvetica /Encoding /WinAnsiEncoding >>',
        b'<< /Type /Font /Subtype /Type1 /BaseFont /Helvetica-Bold /Encoding /WinAnsiEncoding >>',
    ]
    for index, stream in enumerate(streams):
        content_id = 6 + index * 2
        objects.append(f'<< /Type /Page /Parent 2 0 R /MediaBox [0 0 595 842] /Resources << /Font << /F1 3 0 R /F2 4 0 R >> >> /Contents {content_id} 0 R >>'.encode('ascii'))
        objects.append(f'<< /Length {len(stream)} >>\nstream\n'.encode('ascii') + stream + b'endstream')
    output = bytearray(b'%PDF-1.4\n%\xe2\xe3\xcf\xd3\n')
    offsets = [0]
    for i, obj in enumerate(objects, 1):
        offsets.append(len(output))
        output.extend(f'{i} 0 obj\n'.encode('ascii') + obj + b'\nendobj\n')
    xref = len(output)
    output.extend(f'xref\n0 {len(offsets)}\n0000000000 65535 f \n'.encode('ascii'))
    for offset in offsets[1:]:
        output.extend(f'{offset:010} 00000 n \n'.encode('ascii'))
    output.extend(f'trailer\n<< /Size {len(offsets)} /Root 1 0 R >>\nstartxref\n{xref}\n%%EOF\n'.encode('ascii'))
    return bytes(output)


def main():
    output = Path(sys.argv[1]) if len(sys.argv) > 1 else ROOT / 'public/cv.pdf'
    output.write_bytes(generate())
    print(f'Wrote {output}')


if __name__ == '__main__':
    main()
