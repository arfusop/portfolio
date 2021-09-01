import React, { useState } from 'react'
import { DownloadOutlined } from '@ant-design/icons'
import { FaGithub, FaLinkedinIn, FaTwitter, FaFileAlt } from 'react-icons/fa'
import { Button, Modal, Image } from 'antd'

import ResumePdf from '../../assets/Phil Arfuso’s Resume.pdf'
import ResumeJpg from '../../assets/Phil Arfuso’s Resume.jpg'
import styles from './layout.module.scss'

const SideNav = () => {
    const [isModalOpen, setIsModalOpen] = useState(false)

    const TitleNode = (
        <div className="modalTitle">
            <DownloadOutlined
                onClick={() => window.open(ResumePdf, '_blank', 'noreferrer')}
            />{' '}
            Resume
        </div>
    )

    return (
        <nav className={styles.SideNavigation}>
            <h1>
                Developer.
                <br />
                Thinker.
                <br />
                Problem Solver.
                <br />
                Cycler.
                <br />
                Gamer.
            </h1>
            <p>
                Currently working <a href="https://memx.com/">@ MEMX</a>.
                Working on side projects, both for business and pleasure. Take a
                look around. If you like what you see, let's talk.
            </p>
            <div className={styles.social}>
                <a
                    href="https://github.com/arfusop"
                    target="_blank"
                    rel="noreferrer">
                    <FaGithub title="GitHub" />
                </a>
                <a
                    href="www.linkedin.com/in/phil-arfuso"
                    target="_blank"
                    rel="noreferrer">
                    <FaLinkedinIn title="LinkedIn" />
                </a>
                <a
                    href="https://twitter.com/Phil_Arfuso"
                    target="_blank"
                    rel="noreferrer">
                    {' '}
                    <FaTwitter title="Twitter" />
                </a>
                <FaFileAlt
                    onClick={() => {
                        console.log('wtf')
                        setIsModalOpen(true)
                    }}
                    title="Resume"
                />
            </div>
            <a href="mailto:arfusop.dev@gmail.com">
                <Button
                    className={styles.contactButton}
                    shape="round"
                    type="primary">
                    Say Hello
                </Button>
            </a>
            <Modal
                closable
                mask
                maskClosable
                onCancel={() => setIsModalOpen(false)}
                title={TitleNode}
                visible={isModalOpen}
                className="resumeModal"
                footer={null}>
                <Image src={ResumeJpg} alt="resume" />
            </Modal>
        </nav>
    )
}

export default SideNav