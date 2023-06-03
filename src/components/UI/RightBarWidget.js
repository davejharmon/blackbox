import classes from './RightBarWidget.module.css';

export const RightBarWidget = props => {
  return <div className={classes.rightBarWidget}>{props.children}</div>;
};
