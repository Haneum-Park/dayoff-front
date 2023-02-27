import React, { memo } from 'react';
import type { NextPage } from 'next';

import ProjectGrid from '@block/Projects';

const ProjectPage: NextPage = () => <ProjectGrid />;

export default memo(ProjectPage);
