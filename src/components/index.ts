import DealsChart from './home/deals-chart';
import UpcomingEvents from './home/upcoming-events';
import UpcomingEventsSkeleton from './skeleton/upcoming-events';
import AccordionHeaderSkeleton from './skeleton/accordion-header';
import KanbanColumnSkeleton from './skeleton/kanban';
import ProjectCardSkeleton from './skeleton/project-card';
import LatestActivitiesSkeleton from './skeleton/latest-activities';
import TotalCountCard from './home/total-count-card';
import DashboardLatestActivites from './home/latest-activites';
import { KanbanBoardContainer, KanbanBoard } from './tasks/kanban/board';
import KanbanColumn from './tasks/kanban/column';
import KanbanItem from './tasks/kanban/item';
import ProjectCard from './tasks/kanban/card';
import { Accordion } from './accordion';
import { UserTag } from './tags/user-tag';

export {
  UpcomingEvents,
  DealsChart,
  UpcomingEventsSkeleton,
  AccordionHeaderSkeleton,
  KanbanColumnSkeleton,
  ProjectCardSkeleton,
  LatestActivitiesSkeleton,
  TotalCountCard,
  DashboardLatestActivites,
  KanbanBoardContainer,
  KanbanBoard,
  KanbanColumn,
  KanbanItem,
  ProjectCard,
  Accordion,
  UserTag,
};

export * from './text';
export * from './tasks/form/description';
export * from './tasks/form/due-date';
export * from './tasks/form/header';
export * from './tasks/form/stage';
export * from './tasks/form/title';
export * from './tasks/form/users';
