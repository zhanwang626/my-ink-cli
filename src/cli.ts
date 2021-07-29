import * as yargs from 'yargs';
import {summaryComponent, result} from './summary';

export async function cli(): Promise<void> {
    yargs.command({
        command: 'run',
        handler: ()=> {
            const summary = summaryComponent;
            const result: result = {
                tasks: ['ember-types', 'ember-dependencies', 'ember-test'],
            }
            summary.render(result);
        }
    })
    yargs.parse()
}
