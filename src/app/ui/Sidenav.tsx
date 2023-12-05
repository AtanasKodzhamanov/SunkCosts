import styles from './sidenav.module.css';
import Link from 'next/link';
import blogPosts from '../lib/placeholder-data';

const SideNav = () => {
    const uniqueProjects = [...new Set(blogPosts.map(post => post.project))];

    return (
        <div className={styles.sideNav}>
            <Link href="/">
                Home
            </Link>
            {uniqueProjects.map((project, index) => (
                <Link href={`/${encodeURIComponent(project)}`} key={index}>
                    {project}
                </Link>
            ))}
        </div>
    )
}

export default SideNav;
