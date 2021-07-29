import yargs from 'yargs';
import {summaryComponent, result} from './summary';

export async function cli(): Promise<void> {
    yargs.command({
        command: 'my-ink-cli',
        handler: ()=> {
            const summary = summaryComponent;
            const result: result = {
                tasks: ['ember-types', 'ember-dependencies', 'ember-test'],
            }
            summary.render(result);
        }
    }).argv
}
