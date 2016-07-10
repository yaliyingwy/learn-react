alert('before import');
import Foo from '../../components/lifecycle/foo';
import Bar from '../../components/lifecycle/bar';
alert('after import');

alert(`foo.text:${Foo.text.toString()}, bar.text:${Bar.text.toString()}`);

alert(`DEBUG:${process.env.DEBUG}`);
