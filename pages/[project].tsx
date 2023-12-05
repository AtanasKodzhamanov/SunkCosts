// pages/[project].js
import { useRouter } from 'next/router';
import blogPosts from '../src/app/lib/placeholder-data';

const ProjectPage = () => {
    const router = useRouter();
    const projectName = decodeURIComponent(router.query.project as string);

    // Filter posts by project
    const projectPosts = blogPosts.filter(post => post.project === projectName);

    return (
        <div>
            {projectPosts.length > 0 ? (
                projectPosts.map(post => (
                    <article key={post.id}>
                        <h2>{post.title}</h2>
                        <p>{post.content}</p>
                    </article>
                ))
            ) : (
                <p>No posts found for this project.</p>
            )}
        </div>
    );
}

export default ProjectPage;
